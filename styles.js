/* ============ FAMILY BARBERSHOP — HAIRCUT STYLES PAGE ============ */

/* Category meta (order = chip order) */
const CATS = [
  { id: "all",      label: "All Styles" },
  { id: "fades",    label: "Fades" },
  { id: "classic",  label: "Classic" },
  { id: "textured", label: "Textured" },
  { id: "beards",   label: "Beards" },
  { id: "details",  label: "Lineups & Designs" },
  { id: "kids",     label: "Kids" }
];
const CAT_LABEL = {
  fades: "Fade", classic: "Classic", textured: "Textured",
  beards: "Beard", details: "Detail", kids: "Kids"
};
/* Per-card tag/eyebrow label — falls back to the category label. */
function tagLabel(s){ return s.tag || CAT_LABEL[s.cat]; }

/* The style guide. Names + descriptions are standard barbershop terminology. */
const STYLES = [
  { id:"low-fade", name:"Low Fade", cat:"fades", img:"img/work_5.jpg",
    blurb:"The fade starts low — just above the ears and around the neckline — and blends up into the length on top. Subtle, clean, and easy to wear anywhere.",
    suits:"Almost any face shape and hair type — a safe, sharp default.",
    maint:"Touch-up every 2–3 weeks to keep the line clean." },
  { id:"mid-fade", name:"Mid Fade", cat:"fades",
    blurb:"The fade begins around the temples — halfway up the sides — for balanced contrast that's sharp without being aggressive. The crowd favorite.",
    suits:"Works on every face shape; straight, wavy or curly hair.",
    maint:"Every 2–3 weeks to keep the blend tight." },
  { id:"high-fade", name:"High Fade", cat:"fades",
    blurb:"The fade climbs high up the sides for bold, clean contrast against the hair left on top. A loud, modern, head-turning look.",
    suits:"Oval and square faces; adds height and shape.",
    maint:"Every 1–2 weeks — a high fade grows out fast." },
  { id:"burst-fade", name:"Burst Fade", cat:"fades",
    blurb:"The fade curves in a half-circle 'burst' around the ear and tapers at the nape, leaving length and texture up top. Pairs perfectly with a mullet or mohawk shape.",
    suits:"Textured, wavy or curly hair; round and oval faces.",
    maint:"Every 2–3 weeks to keep the burst clean." },

  { id:"buzz-cut", name:"Buzz Cut", cat:"classic",
    blurb:"One short, even clipper length all over with a crisp lined-up hairline. The lowest-maintenance cut in the shop — all confidence, zero fuss.",
    suits:"Strong, symmetrical faces; works on thinning hair too.",
    maint:"Quick re-buzz every 2–3 weeks; no styling, ever." },
  { id:"crew-cut", name:"Crew Cut", cat:"classic",
    blurb:"Tapered short back and sides with a little more length up front that shortens toward the crown. A timeless, masculine cut that never dates.",
    suits:"Most face shapes; straight or wavy hair.",
    maint:"Every 3–4 weeks; minimal product." },
  { id:"caesar", name:"Caesar", cat:"classic",
    blurb:"Even short length all around with a short, straight fringe combed forward across the forehead. Clean, defined, and easy.",
    suits:"Great for receding or uneven hairlines; round/oval faces.",
    maint:"Every 3 weeks; a little matte paste, done." },
  { id:"comb-over", name:"Comb Over", cat:"classic",
    blurb:"Hair combed neatly to one side off a sharp shaved part, with faded short sides. The sharp, polished gentleman's standard.",
    suits:"Oval, square and oblong faces; medium straight hair.",
    maint:"Daily comb + pomade; re-cut every 2–3 weeks." },
  { id:"pompadour", name:"Pompadour", cat:"classic",
    blurb:"Big volume swept up and back off the forehead over short faded sides, finished glossy. A retro-modern showpiece with serious presence.",
    suits:"Oval and square faces; thick, straight-to-wavy hair.",
    maint:"Daily blow-dry + pomade; trims every 3–4 weeks." },
  { id:"slick-back", name:"Slick Back", cat:"classic",
    blurb:"Longer hair on top combed straight back off the face with a sleek pomade finish over tapered sides. Effortlessly sharp and grown-up.",
    suits:"Most faces; medium-to-long straight or wavy hair.",
    maint:"Daily product; re-cut every 4–5 weeks." },

  { id:"textured-crop", name:"Textured Crop", cat:"textured",
    blurb:"Choppy, textured hair on top with a short blunt fringe across the forehead and faded sides. The modern French crop — effortless and on-trend.",
    suits:"Round and oval faces; fine or thick hair gets movement.",
    maint:"A little clay; tidy every 3–4 weeks." },
  { id:"quiff", name:"Quiff", cat:"textured",
    blurb:"The front swept up and back with soft, natural volume — looser than a pompadour — over medium faded sides. Stylish without trying too hard.",
    suits:"Oval, round and triangle faces; thick textured hair.",
    maint:"Light blow-dry + matte product; trims every 3–4 weeks." },
  { id:"two-block", name:"Two-Block / Korean", cat:"textured",
    blurb:"Fuller, layered hair up top that drapes over a clearly shorter undercut on the back and sides. Soft, youthful K-style with a clean disconnect.",
    suits:"Straight medium hair; oval and heart-shaped faces.",
    maint:"Light styling; re-cut every 4–6 weeks." },
  { id:"curly-sponge", name:"Curly Sponge / Afro", cat:"textured",
    blurb:"Natural curls and coils defined with sponge texture up top, finished with a clean taper and a crisp lineup. Celebrates your natural pattern.",
    suits:"Coily and curly hair; most face shapes.",
    maint:"Daily moisture + sponge; shape-up every 2–3 weeks." },
  { id:"modern-mullet", name:"Modern Mullet", cat:"textured",
    blurb:"Short, textured front and sides with deliberate length left at the back — often over a burst fade. The edgy, confident revival of a classic.",
    suits:"Wavy and curly hair; oval and square faces.",
    maint:"Texturize the back; re-cut every 4–5 weeks." },

  { id:"beard-lineup", name:"Beard Sculpt + Lineup", cat:"beards", tag:"Beard", img:"img/work_4.jpg",
    blurb:"A full beard cleanly shaped with razor-defined cheek lines and neckline, edges crisped and the mustache connected. Sharp lines make the beard.",
    suits:"Any beard with enough density to shape and define.",
    maint:"Trim + line every 1–2 weeks to hold the edges." },
  { id:"beard-fade-combo", name:"Beard + Skin Fade", cat:"beards", tag:"Beard + Fade", img:"img/work_1.jpg",
    blurb:"A skin fade on the sides that blends seamlessly into a sharply lined full beard, with a clean cheek line and styled top. The complete, connected look.",
    suits:"Fuller beards; pairs with most cuts and faces.",
    maint:"Bi-weekly to keep the fade and beard line tight." },
  { id:"edge-up", name:"Edge-Up / Line-Up", cat:"details", tag:"Line-Up",
    blurb:"A razor-sharp, squared hairline and temples with perfectly straight edges framing the forehead. The detailing that makes any cut look fresh.",
    suits:"Any cut — the finishing touch that sharpens everything.",
    maint:"Every 1–2 weeks; the line softens as it grows." },
  { id:"hair-design", name:"Hair Design / Parts", cat:"details", tag:"Hair Design", img:"img/work_2.jpg",
    blurb:"Crisp shaved lines, parts or freehand patterns etched into a fade for a custom, personal touch. Pure barber artistry — ask Kelvo or Elvin.",
    suits:"Any short cut or fade with room for a clean canvas.",
    maint:"Every 1–2 weeks; lines fade out as hair grows." },

  { id:"kids-cut", name:"Kids Cut", cat:"kids", img:"img/elvin_work_7.jpg",
    blurb:"A clean, age-appropriate cut — usually a low taper with a neat top and tidy lineup — done by patient barbers who keep it quick and fun.",
    suits:"Kids 12 & under; any hair type.",
    maint:"Every 3–4 weeks; easy at-home upkeep." }
];

/* Real shop photo where we have one that clearly matches; else the generated portrait. */
function styleImg(s){ return s.img || `img/styles/${s.id}.jpg`; }

/* ---------- render grid ---------- */
const grid = document.getElementById('stylesGrid');
const emptyEl = document.getElementById('stylesEmpty');

function cardHTML(s){
  return `
  <button class="style-card" data-style="${s.id}" data-cat="${s.cat}" aria-label="View the ${s.name} — full description and book">
    <span class="style-card-media">
      <span class="style-card-tag">${tagLabel(s)}</span>
      <img src="${styleImg(s)}" alt="${s.name} haircut on a Family Barbershop client" loading="lazy" />
    </span>
    <span class="style-card-foot">
      <span class="style-card-name">${s.name}</span>
      <svg class="style-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </span>
  </button>`;
}
grid.innerHTML = STYLES.map(cardHTML).join('');

/* ---------- filter chips ---------- */
const chipsEl = document.getElementById('chips');
const countEl = document.getElementById('filterCount');
let activeCat = 'all';

function counts(catId){
  return catId === 'all' ? STYLES.length : STYLES.filter(s => s.cat === catId).length;
}
chipsEl.innerHTML = CATS.map(c =>
  `<button class="chip${c.id==='all'?' is-on':''}" role="tab" aria-selected="${c.id==='all'}" data-cat="${c.id}">
     ${c.label}<span class="chip-n">${counts(c.id)}</span>
   </button>`
).join('');

function applyFilter(catId){
  activeCat = catId;
  chipsEl.querySelectorAll('.chip').forEach(ch => {
    const on = ch.getAttribute('data-cat') === catId;
    ch.classList.toggle('is-on', on);
    ch.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  let shown = 0;
  grid.querySelectorAll('.style-card').forEach(card => {
    const match = catId === 'all' || card.getAttribute('data-cat') === catId;
    card.hidden = !match;
    if(match) shown++;
  });
  emptyEl.hidden = shown !== 0;
  countEl.textContent = `${shown} ${shown === 1 ? 'style' : 'styles'}`;
}
chipsEl.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if(chip) applyFilter(chip.getAttribute('data-cat'));
});
applyFilter('all');

/* ---------- style detail sheet ---------- */
const styleModal = document.getElementById('styleModal');
const styleDetail = document.getElementById('styleDetail');

function detailHTML(s){
  return `
    <div class="style-detail-media">
      <img src="${styleImg(s)}" alt="${s.name} haircut, close detail" />
      <span class="style-card-tag">${tagLabel(s)}</span>
    </div>
    <div class="style-detail-body">
      <span class="eyebrow"><span class="dot"></span> The ${tagLabel(s)}</span>
      <h3 class="style-detail-name">${s.name}</h3>
      <p class="style-detail-blurb">${s.blurb}</p>
      <ul class="style-detail-meta">
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
          <div><strong>Best for</strong><span>${s.suits}</span></div>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
          <div><strong>Upkeep</strong><span>${s.maint}</span></div>
        </li>
      </ul>
      <button class="btn btn-primary btn-block" data-open-book type="button">
        Book This Look
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
      <p class="tiny center" style="margin-top:14px">Screenshot this style and show your barber in the chair.</p>
    </div>`;
}
function openStyle(id){
  const s = STYLES.find(x => x.id === id);
  if(!s) return;
  styleDetail.innerHTML = detailHTML(s);
  styleDetail.parentElement.scrollTop = 0;
  styleModal.classList.add('open');
  styleModal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeStyle(){
  styleModal.classList.remove('open');
  styleModal.setAttribute('aria-hidden','true');
  if(!bookModal.classList.contains('open')) document.body.style.overflow = '';
}

/* ---------- booking modal: barber picker → live GHL calendar ---------- */
const BARBERS = window.FB_BARBERS || [];
const bookModal = document.getElementById('bookModal');
const barberPick = document.getElementById('barberPick');
const bookEmbed = document.getElementById('bookEmbed');
const bookNewTab = document.getElementById('bookNewTab');
const bookBack = document.getElementById('bookBack');
const mAvatar = document.getElementById('mAvatar');
const bookTitle = document.getElementById('bookTitle');
const mSpec = document.getElementById('mSpec');

barberPick.innerHTML = BARBERS.map(b => `
  <button class="bp-card" data-barber="${b.id}" type="button" aria-label="Book with ${b.name}">
    <span class="bp-card-photo" style="background-image:url('${b.photo}')">
      <span class="status ${b.status}">${b.statusText}</span>
    </span>
    <span class="bp-card-name">${b.name}</span>
    <span class="bp-card-spec">${b.specialty}</span>
    <span class="bp-card-rate"><span class="star">★</span>${b.rating.toFixed(1)} · ${b.years} yrs</span>
  </button>
`).join('');

function showPicker(){
  barberPick.hidden = false;
  bookBack.hidden = true;
  bookEmbed.innerHTML = '';
  bookEmbed.classList.remove('is-live');
  bookNewTab.style.display = 'none';
  mAvatar.style.backgroundImage = '';
  mAvatar.classList.add('is-logo');
  bookTitle.textContent = 'Pick your barber';
  mSpec.textContent = '7 master barbers · same-day slots';
}
function showCalendar(barberId){
  const b = BARBERS.find(x => x.id === barberId);
  if(!b) return;
  barberPick.hidden = true;
  bookBack.hidden = false;
  mAvatar.classList.remove('is-logo');
  mAvatar.style.backgroundImage = `url('${b.photo}')`;
  bookTitle.textContent = b.name;
  mSpec.textContent = `${b.specialty} · ${b.years} yrs · ★ ${b.rating.toFixed(1)}`;
  const calId = b.calendarUrl.split('/').pop();
  bookEmbed.classList.add('is-live');
  bookEmbed.innerHTML =
    `<iframe src="${b.calendarUrl}" class="ghl-book-frame" id="${calId}_booking" `
    + `scrolling="no" title="Book with ${b.name}" loading="lazy"></iframe>`;
  bookNewTab.href = b.calendarUrl;
  bookNewTab.style.display = '';
}
function openBook(){
  showPicker();
  bookModal.classList.add('open');
  bookModal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeBook(){
  bookModal.classList.remove('open');
  bookModal.setAttribute('aria-hidden','true');
  bookEmbed.innerHTML = '';
  if(!styleModal.classList.contains('open')) document.body.style.overflow = '';
}

/* ---------- global click + key handling ---------- */
document.addEventListener('click', e => {
  const card = e.target.closest('[data-style]');
  if(card){ openStyle(card.getAttribute('data-style')); return; }

  if(e.target.closest('[data-open-book]')){ closeStyle(); openBook(); return; }

  const bpick = e.target.closest('[data-barber]');
  if(bpick){ showCalendar(bpick.getAttribute('data-barber')); return; }

  if(e.target.closest('#bookBack')){ showPicker(); return; }
  if(e.target.closest('[data-style-close]')){ closeStyle(); return; }
  if(e.target.matches('[data-close]')){ closeBook(); return; }
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeStyle(); closeBook(); }
});
