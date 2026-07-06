#!/usr/bin/env python3
"""Poll GHL for barber replies to the Booksy onboarding SMS.
Reads/updates booksy-onboarding-state.json. For each barber that has not yet
'replied', fetches inbound conversation messages and extracts a Booksy URL and
an email. Prints a NEW-FINDINGS summary the agent acts on (wire site / invite staff).

Env required: GHL_LOC, GHL_PIT
"""
import os, re, json, urllib.request, urllib.error

BASE = "https://services.leadconnectorhq.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
LOC = os.environ["GHL_LOC"]; PIT = os.environ["GHL_PIT"]
STATE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "booksy-onboarding-state.json")

EMAIL_RE = re.compile(r"[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}")
# booksy links appear as booksy.com/... or full https, sometimes shortened bksy
URL_RE = re.compile(r"(https?://[^\s]+|(?:www\.)?booksy\.com/[^\s]+|[A-Za-z0-9.\-]+\.booksy\.com/[^\s]+)", re.I)

def get(path, version="2021-04-15"):
    req = urllib.request.Request(BASE+path,
        headers={"Authorization":f"Bearer {PIT}","Version":version,"Accept":"application/json","User-Agent":UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        try: return e.code, json.loads(e.read().decode())
        except: return e.code, "non-json"

def inbound_text(cid):
    st, conv = get(f"/conversations/search?locationId={LOC}&contactId={cid}")
    if st != 200 or not isinstance(conv, dict): return "", []
    convs = conv.get("conversations", [])
    msgs_in = []
    for c in convs:
        st2, m = get(f"/conversations/{c['id']}/messages")
        if st2 != 200: continue
        arr = (m.get("messages") or {}).get("messages") or m.get("messages") or []
        for msg in arr:
            if (msg.get("direction") == "inbound") and msg.get("body"):
                msgs_in.append(msg["body"])
    return "\n".join(msgs_in), msgs_in

def main():
    state = json.load(open(STATE))
    new = []
    for b in state["barbers"]:
        if b.get("replied") and b.get("booksyUrl") and b.get("email"):
            continue  # fully done
        if not b.get("contactId"): continue
        text, msgs = inbound_text(b["contactId"])
        if not text:
            continue
        b["replied"] = True
        b["lastInbound"] = text[-1500:]
        # extract booksy url
        if not b.get("booksyUrl"):
            urls = [u.rstrip('.,)') for u in URL_RE.findall(text)]
            booksy = next((u for u in urls if "booksy" in u.lower() or "bksy" in u.lower()), None)
            if booksy:
                if not booksy.startswith("http"): booksy = "https://" + booksy
                b["booksyUrl"] = booksy
                new.append(("BOOKSY", b["name"], booksy))
        # extract email
        if not b.get("email"):
            em = EMAIL_RE.search(text)
            if em:
                b["email"] = em.group(0)
                new.append(("EMAIL", b["name"], em.group(0)))
        if b.get("replied") and not b.get("booksyUrl") and not b.get("email"):
            new.append(("REPLY_NO_DATA", b["name"], text[:200]))

    json.dump(state, open(STATE,"w"), indent=2, ensure_ascii=False)

    pending = [b["name"] for b in state["barbers"] if not (b.get("booksyUrl") and b.get("email"))]
    print("=== NEW FINDINGS ===")
    if new:
        for kind, name, val in new: print(f"{kind}: {name} -> {val}")
    else:
        print("(none this cycle)")
    print("\n=== STATUS ===")
    for b in state["barbers"]:
        flags = []
        flags.append("booksy✓" if b.get("booksyUrl") else "booksy✗")
        flags.append("email✓" if b.get("email") else "email✗")
        flags.append("wired✓" if b.get("siteWired") else "wired✗")
        flags.append("staff✓" if b.get("staffInvited") else "staff✗")
        print(f"  {b['name']:8} {' '.join(flags)}")
    print(f"\nPENDING (missing booksy or email): {pending if pending else 'NONE — all collected'}")
    print(f"ALL_DONE={all(b.get('siteWired') and b.get('staffInvited') for b in state['barbers'])}")

if __name__ == "__main__":
    main()
