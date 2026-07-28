/* ============ FAMILY BARBERSHOP — v3 ============ */

/* Barber roster now lives in barbers-data.js (shared with the Styles page). */
const BARBERS = window.FB_BARBERS || [];

/* Build a tel: link from a US phone string like "(407) 242-3301" */
function telLink(phone){
  return '+1' + (phone || '').replace(/\D/g,'');
}

/* ============ META PIXEL + CAPI TRACKING ============ */
/* Fires a standard event to BOTH the browser pixel and our server-side CAPI
   relay (/api/capi), sharing ONE event_id so Meta de-duplicates them into a
   single event. Wrapped in try/catch + fire-and-forget so a tracking hiccup
   can never block or delay a booking. */
const FB_PIXEL_ID = '1699302127751630';
function _fbCookie(name){
  const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return m ? m.pop() : '';
}
function fbTrack(eventName, custom){
  custom = custom || {};
  const eventId = eventName.toLowerCase() + '_' + Date.now() + '_' + Math.random().toString(36).slice(2,10);
  try { if(window.fbq) fbq('track', eventName, custom, { eventID: eventId }); } catch(e){}
  try {
    const tec = new URLSearchParams(location.search).get('test_event_code') || undefined;
    fetch('/api/capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: location.href,
        custom_data: custom,
        fbp: _fbCookie('_fbp'),
        fbc: _fbCookie('_fbc'),
        test_event_code: tec
      })
    }).catch(function(){});
  } catch(e){}
}

/* Render barber tiles — tap a tile to open that barber's profile */
const grid = document.getElementById('barbersGrid');

function masterBadge(){
  return `<span class="b-tile-master"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2l2.6 6.6L22 9.3l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.9L2 9.3l7.4-.7L12 2z"/></svg> Master Barber</span>`;
}

function renderTile(b){
  return `
  <button class="b-tile${b.featured ? ' is-master' : ''}" data-profile="${b.id}" aria-label="View ${b.name}'s profile and book">
    <div class="b-tile-photo">
      <img src="${b.photo}" alt="${b.name}, ${b.specialty}" loading="lazy" />
      <div class="b-tile-info">
        <div class="b-tile-id">
          ${b.featured ? `<span class="b-tile-cred"><svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11"><path d="M12 2l2.6 6.6L22 9.3l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.9L2 9.3l7.4-.7L12 2z"/></svg> Master Barber</span>` : ''}
          <h3>${b.name}</h3>
          <span class="b-tile-spec">${b.specialty}</span>
        </div>
      </div>
    </div>
    <div class="b-tile-statusbar"><span class="status ${b.status}">${b.statusText}</span></div>
    <span class="b-tile-cta">View Profile
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </span>
  </button>`;
}

grid.innerHTML = BARBERS.map(renderTile).join('');

/* ============ BARBER PROFILE MODAL ============ */
const profileModal = document.getElementById('profileModal');
const profileBody  = document.getElementById('profileBody');

function buildProfileHTML(b){
  return `
    <div class="bp-top">
      <div class="bp-photo">
        <span class="status ${b.status}">${b.statusText}</span>
        ${b.featured ? masterBadge() : ''}
        <img src="${b.photo}" alt="${b.name}, ${b.specialty}" />
      </div>
      <div class="bp-info">
        ${b.years ? `<span class="bp-eyebrow"><span class="dot"></span> ${b.years} years experience</span>` : ''}
        <h3 class="bp-name">${b.name}</h3>
        <div class="bp-spec">${b.specialty}</div>
        <p class="bp-bio">${b.bio}</p>
        <div class="barber-contact">
          <a href="tel:${telLink(b.phone)}" class="barber-phone" aria-label="Call ${b.name.split(' ')[0]}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
            ${b.phone}
          </a>
          <a href="https://instagram.com/${b.instagram}" target="_blank" rel="noopener" class="barber-ig" aria-label="${b.name.split(' ')[0]} on Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            @${b.instagram}
          </a>
        </div>
        <button class="barber-book bp-book" data-book="${b.id}" aria-label="Book with ${b.name}">
          Book with ${b.name.split(' ')[0]}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
    ${hasRealCuts(b) ? `
    <div class="bp-gallery-head">
      <h4>${b.name.split(' ')[0]}'s Work</h4>
      <span>${b.cuts.length} recent cuts</span>
    </div>
    <div class="bp-gallery">
      ${b.cuts.map(c => `<div class="bp-shot"><img src="${c}" alt="Recent cut by ${b.name}" loading="lazy"/></div>`).join('')}
    </div>` : ''}`;
}

/* Only show the work gallery once a barber has real (local) cut photos —
   never show stock images as a barber's portfolio. */
function hasRealCuts(b){
  return Array.isArray(b.cuts) && b.cuts.length > 0 && b.cuts.every(c => c.startsWith('img/'));
}

function bindProfileGallery(){
  const imgs = Array.from(profileBody.querySelectorAll('.bp-gallery .bp-shot img'));
  imgs.forEach((img, i) => {
    img.addEventListener('click', () => {
      lbList = imgs.map(im => ({ src: im.currentSrc || im.src, alt: im.alt }));
      lbOpen(i);
    });
  });
}

function openProfile(id){
  const b = BARBERS.find(x => x.id === id);
  if(!b) return;
  profileBody.innerHTML = buildProfileHTML(b);
  profileBody.scrollTop = 0;
  profileModal.classList.add('open');
  profileModal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  bindProfileGallery();
}
function closeProfile(){
  profileModal.classList.remove('open');
  profileModal.setAttribute('aria-hidden','true');
  if(!modal.classList.contains('open')) document.body.style.overflow = '';
}

/* Gallery strip — real cuts from the shop */
const GALLERY = [
  "img/work_1.jpg",
  "img/work_2.jpg",
  "img/work_3.jpg",
  "img/work_4.jpg",
  "img/work_5.jpg",
  "img/work_6.jpg"
];
const galleryGrid = document.getElementById('galleryGrid');
galleryGrid.innerHTML =
  GALLERY.map((g,i) => `<div class="g" role="button" tabindex="0" aria-label="Open photo ${i+1} of ${GALLERY.length} full screen"><img src="${g}" alt="Recent cut from Family Barbershop" loading="lazy"/></div>`).join('');

/* Tap any gallery photo to open it in the full-screen lightbox (swipe / zoom / arrows) */
(function bindGalleryLightbox(){
  const tiles = Array.from(galleryGrid.querySelectorAll('.g'));
  const openAt = (i) => {
    lbList = tiles.map(t => { const im = t.querySelector('img'); return { src: im.currentSrc || im.src, alt: im.alt }; });
    lbOpen(i);
  };
  tiles.forEach((t,i) => {
    t.addEventListener('click', () => openAt(i));
    t.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openAt(i); }
    });
  });
})();

/* ============ MODAL BOOKING — live GHL calendar embed ============ */
const modal = document.getElementById('bookModal');
const bookEmbed = document.getElementById('bookEmbed');
const bookNewTab = document.getElementById('bookNewTab');
const mAvatar = document.getElementById('mAvatar');
const bookTitle = document.getElementById('bookTitle');
const mSpec = document.getElementById('mSpec');

/* Embed the barber's real GoHighLevel booking widget inside the dark modal.
   form_embed.js (loaded in <head>) auto-resizes the iframe by its id. */
function openModal(barberId){
  const b = BARBERS.find(x => x.id === barberId);
  if(!b) return;
  mAvatar.style.backgroundImage = `url('${b.photo}')`;
  bookTitle.textContent = b.name;
  mSpec.textContent = b.years ? `${b.specialty} · ${b.years} yrs` : b.specialty;

  if(b.calendarUrl){
    const calId = b.calendarUrl.split('/').pop();
    bookEmbed.innerHTML =
      `<iframe src="${b.calendarUrl}" class="ghl-book-frame" id="${calId}_booking" `
      + `scrolling="yes" title="Book with ${b.name}" loading="lazy"></iframe>`;
    bookNewTab.href = b.calendarUrl;
    bookNewTab.style.display = '';
  } else {
    bookEmbed.innerHTML =
      `<p class="tiny center" style="padding:40px 0">Online booking for ${b.name} is coming soon. `
      + `Call <a href="tel:${telLink(b.phone)}" style="color:var(--red)">${b.phone}</a> to book.</p>`;
    bookNewTab.style.display = 'none';
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  bookEmbed.innerHTML = ''; // unload iframe so it reloads fresh next open
}
document.addEventListener('click', (e) => {
  const prof = e.target.closest('[data-profile]');
  if(prof){
    const pid = prof.getAttribute('data-profile');
    const pb = BARBERS.find(x => x.id === pid);
    fbTrack('ViewContent', { content_name: pb ? pb.name : pid, content_category: 'barber_profile' });
    openProfile(pid);
    return;
  }
  const bk = e.target.closest('[data-book]');
  if(bk){
    const b = BARBERS.find(x => x.id === bk.getAttribute('data-book'));
    // Count any tap on "Book with [Barber]" as a Lead (covers GHL, Booksy & WhatsApp).
    fbTrack('Lead', {
      content_name: b ? b.name : bk.getAttribute('data-book'),
      content_category: 'appointment_booking',
      value: (b && b.price) ? b.price : 25,
      currency: 'USD'
    });
    // Barbers who run their own Booksy book their chair there (opens Booksy);
    // their appointments still flow back into GHL via the Booksy→Google→GHL hook.
    if(b && b.booksyUrl){
      window.open(b.booksyUrl, '_blank', 'noopener');
      return;
    }
    // Barbers who take bookings over WhatsApp (e.g. Ricardo) open a chat
    // prefilled with a booking message instead of the GHL calendar.
    if(b && b.whatsappUrl){
      window.open(b.whatsappUrl, '_blank', 'noopener');
      return;
    }
    closeProfile();
    openModal(bk.getAttribute('data-book'));
    return;
  }
  if(e.target.closest('[data-profile-close]')){ closeProfile(); return; }
  if(e.target.matches('[data-close]')){ closeModal(); }
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){ closeModal(); closeProfile(); }
});

/* ============ LIGHTBOX (Elvin's work gallery) ============ */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');
const lbStage = document.getElementById('lbStage');
let lbList = [];
let lbIdx = 0;
let lbScale = 1, lbX = 0, lbY = 0;
let lbDragging = false, lbDragStart = null;
const lbPointers = new Map();
let lbPinchStart = null;
let lbLastTap = 0;

function lbApply(){
  lbImg.style.transform = `translate(${lbX}px, ${lbY}px) scale(${lbScale})`;
}
function lbReset(animate){
  lbScale = 1; lbX = 0; lbY = 0;
  if(animate){
    lbImg.style.transition = 'transform .25s ease';
    lbApply();
    setTimeout(()=>{ lbImg.style.transition = ''; }, 260);
  } else {
    lbApply();
  }
}
function lbLoad(){
  const item = lbList[lbIdx];
  lbImg.src = item.src;
  lbImg.alt = item.alt || '';
  lbCounter.textContent = `${lbIdx+1} / ${lbList.length}`;
  lbReset(false);
}
function lbOpen(i){
  lbIdx = i;
  lbLoad();
  lb.classList.add('open');
  lb.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function lbClose(){
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  lbPointers.clear();
  lbPinchStart = null;
  lbDragging = false;
}
function lbStep(d){
  lbIdx = (lbIdx + d + lbList.length) % lbList.length;
  lbLoad();
}

// Profile-gallery images are wired into the lightbox dynamically when a
// profile opens — see bindProfileGallery().

// Click handling: backdrop closes, image area doesn't
lb.addEventListener('click', (e) => {
  if (e.target.matches('[data-lb-close]')) { lbClose(); return; }
  if (e.target.matches('[data-lb-prev]'))  { lbStep(-1); return; }
  if (e.target.matches('[data-lb-next]'))  { lbStep(+1); return; }
  if (e.target === lb || e.target === lbStage) lbClose();
});

document.addEventListener('keydown', (e) => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')     { lbClose(); }
  if (e.key === 'ArrowLeft')  { lbStep(-1); }
  if (e.key === 'ArrowRight') { lbStep(+1); }
});

// Wheel-to-zoom (desktop)
lbStage.addEventListener('wheel', (e) => {
  if (!lb.classList.contains('open')) return;
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.18 : 1/1.18;
  const next = Math.min(5, Math.max(1, lbScale * factor));
  lbScale = next;
  if (lbScale === 1) { lbX = 0; lbY = 0; }
  lbApply();
}, { passive: false });

// Double-click / double-tap toggles zoom
lbImg.addEventListener('dblclick', (e) => {
  e.stopPropagation();
  if (lbScale > 1) lbReset(true);
  else { lbScale = 2.5; lbImg.style.transition = 'transform .25s ease'; lbApply(); setTimeout(()=>{lbImg.style.transition='';},260); }
});

// Pointer events: 1 finger pans (when zoomed), 2 fingers pinch
lbImg.addEventListener('pointerdown', (e) => {
  lbPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (lbPointers.size === 1) {
    // double-tap detection for touch
    if (e.pointerType === 'touch') {
      const now = Date.now();
      if (now - lbLastTap < 300) {
        if (lbScale > 1) lbReset(true);
        else { lbScale = 2.5; lbImg.style.transition = 'transform .25s ease'; lbApply(); setTimeout(()=>{lbImg.style.transition='';},260); }
        lbLastTap = 0;
        return;
      }
      lbLastTap = now;
    }
    if (lbScale > 1) {
      lbDragging = true;
      lbDragStart = { x: e.clientX - lbX, y: e.clientY - lbY };
      lbImg.setPointerCapture(e.pointerId);
    }
  } else if (lbPointers.size === 2) {
    const pts = [...lbPointers.values()];
    lbPinchStart = {
      d: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y),
      s: lbScale
    };
    lbDragging = false;
  }
});
lbImg.addEventListener('pointermove', (e) => {
  if (!lbPointers.has(e.pointerId)) return;
  lbPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (lbPointers.size === 2 && lbPinchStart) {
    const pts = [...lbPointers.values()];
    const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    lbScale = Math.min(5, Math.max(1, lbPinchStart.s * (d / lbPinchStart.d)));
    if (lbScale === 1) { lbX = 0; lbY = 0; }
    lbApply();
  } else if (lbDragging && lbScale > 1) {
    lbX = e.clientX - lbDragStart.x;
    lbY = e.clientY - lbDragStart.y;
    lbApply();
  }
});
const lbPointerEnd = (e) => {
  lbPointers.delete(e.pointerId);
  if (lbPointers.size < 2) lbPinchStart = null;
  if (lbPointers.size === 0) lbDragging = false;
};
lbImg.addEventListener('pointerup', lbPointerEnd);
lbImg.addEventListener('pointercancel', lbPointerEnd);
lbImg.addEventListener('lostpointercapture', lbPointerEnd);

// Swipe-to-navigate on touch (when not zoomed)
let lbSwipeStart = null;
lbStage.addEventListener('touchstart', (e) => {
  if (lbScale > 1 || e.touches.length !== 1) { lbSwipeStart = null; return; }
  lbSwipeStart = { x: e.touches[0].clientX, t: Date.now() };
}, { passive: true });
lbStage.addEventListener('touchend', (e) => {
  if (!lbSwipeStart || lbScale > 1) return;
  const dx = (e.changedTouches[0].clientX - lbSwipeStart.x);
  const dt = Date.now() - lbSwipeStart.t;
  if (dt < 500 && Math.abs(dx) > 60) lbStep(dx < 0 ? +1 : -1);
  lbSwipeStart = null;
}, { passive: true });

/* ============ NAV SCROLL ============ */
window.addEventListener('scroll', () => {
  const n = document.getElementById('nav');
  if(window.scrollY > 40){ n.classList.add('scrolled'); }
  else { n.classList.remove('scrolled'); }
});

/* ============ CHAIRS-OPEN TAG (rotates hourly, business hours only) ============ */
/* The count is keyed to the current hour so it changes every hour
   (and never reads as a stale, hard-coded number). The tag only shows while
   the shop is actually open — Mon–Sat 9 AM–7 PM, Sun 10 AM–2 PM, shop-local
   Eastern time — so it never claims open chairs after hours. */
(function(){
  const el = document.getElementById('chairsOpenTag');
  if(!el) return;
  const tag = el.closest('.hero-tag');
  const COUNTS = [3, 5, 2, 4, 3, 2, 5, 4, 2, 3, 4, 5,
                  2, 4, 5, 3, 2, 5, 3, 4, 2, 3, 5, 4]; // one per hour of the day
  function shopNow(){
    return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
  }
  function isOpen(d){
    const day = d.getDay(), hr = d.getHours();
    return day === 0 ? (hr >= 10 && hr < 14)   // Sun 10 AM – 2 PM
                     : (hr >= 9 && hr < 19);   // Mon–Sat 9 AM – 7 PM
  }
  function update(){
    const now = shopNow();
    const open = isOpen(now);
    if(tag) tag.style.display = open ? '' : 'none';
    if(!open) return;
    const n = COUNTS[now.getHours() % COUNTS.length];
    el.textContent = n + (n === 1 ? ' Chair Open Now' : ' Chairs Open Now');
  }
  update();
  setInterval(update, 60 * 1000); // re-check each minute so it flips on the hour
})();

/* ============ BACK TO SCHOOL PROMO (Aug 3–8) — section + opening popup ============ */
(function(){
  // Promo window (Eastern). Popup + section auto-retire after the window ends.
  const BTS_START = new Date('2026-08-03T00:00:00-04:00');
  const BTS_END   = new Date('2026-08-08T23:59:59-04:00');

  const section = document.getElementById('back-to-school');
  const popup   = document.getElementById('btsPopup');
  if(!section && !popup) return;

  // Expired → remove both and stop.
  if(Date.now() > BTS_END.getTime()){
    if(section) section.remove();
    if(popup) popup.remove();
    return;
  }

  /* --- Language (scoped to the BTS section + popup via html[data-bts-lang]) --- */
  function applyBtsLang(lang){
    const l = (lang === 'es') ? 'es' : 'en';
    document.documentElement.setAttribute('data-bts-lang', l);
    document.querySelectorAll('[data-bts-lang-btn]').forEach(b =>
      b.classList.toggle('is-on', b.getAttribute('data-bts-lang-btn') === l));
    try { localStorage.setItem('fb_home_lang', l); } catch(e){}
    renderCountdown();
  }
  document.addEventListener('click', (e) => {
    const lb = e.target.closest('[data-bts-lang-btn]');
    if(lb) applyBtsLang(lb.getAttribute('data-bts-lang-btn'));
  });
  let saved = null;
  try { saved = localStorage.getItem('fb_home_lang'); } catch(e){}
  const initialLang = saved || ((navigator.language||'').toLowerCase().startsWith('es') ? 'es' : 'en');

  /* --- Countdown (starts-in before Aug 3, ends-in during the week) --- */
  const CD = {
    en: { starts:'Starts Mon Aug 3 — ', ends:'Offer ends in ', d:'d', h:'h', m:'m', left:' left to reserve' },
    es: { starts:'Empieza el lun 3 de agosto — ', ends:'La oferta termina en ', d:'d', h:'h', m:'m', left:' para reservar' }
  };
  function renderCountdown(){
    const lang = document.documentElement.getAttribute('data-bts-lang') === 'es' ? 'es' : 'en';
    const t = CD[lang];
    const now = Date.now();
    const pre = now < BTS_START.getTime();
    const target = pre ? BTS_START.getTime() : BTS_END.getTime();
    let ms = Math.max(0, target - now);
    const d = Math.floor(ms / 86400000); ms -= d * 86400000;
    const h = Math.floor(ms / 3600000);  ms -= h * 3600000;
    const m = Math.floor(ms / 60000);
    const clock = `<strong>${d}${t.d} ${h}${t.h} ${m}${t.m}</strong>`;
    const html = pre ? (t.starts + clock + t.left) : (t.ends + clock);
    document.querySelectorAll('[data-bts-countdown]').forEach(el => { el.innerHTML = html; });
  }
  setInterval(renderCountdown, 30 * 1000);

  /* --- Section flyers → full-screen lightbox (reuses the site lightbox) --- */
  const flyerWrap = document.getElementById('btsFlyers');
  if(flyerWrap){
    const tiles = Array.from(flyerWrap.querySelectorAll('.bts-flyer'));
    const openAt = (i) => {
      lbList = tiles.map(tl => { const im = tl.querySelector('img'); return { src: im.currentSrc || im.src, alt: im.alt }; });
      lbOpen(i);
    };
    tiles.forEach((tl, i) => {
      tl.addEventListener('click', () => openAt(i));
      tl.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openAt(i); }
      });
    });
  }

  /* --- Opening popup: shows once per session, ~1s after load --- */
  function openPopup(){
    if(!popup) return;
    popup.classList.add('open');
    popup.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    fbTrack('ViewContent', { content_name: 'back_to_school_popup', content_category: 'promo' });
  }
  function closePopup(){
    if(!popup) return;
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  if(popup){
    popup.addEventListener('click', (e) => {
      if(e.target.closest('[data-bts-close]')){
        const cta = e.target.closest('[data-bts-cta]');
        // the anchor jump can't happen while the body is scroll-locked —
        // close first, then scroll to the section ourselves
        if(cta) e.preventDefault();
        closePopup();
        if(cta){
          fbTrack('ViewContent', { content_name: 'back_to_school_popup_cta', content_category: 'promo' });
          const target = document.getElementById('back-to-school');
          if(target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && popup.classList.contains('open')) closePopup();
    });

    /* flyer carousel inside the popup */
    const slides = Array.from(document.querySelectorAll('#btsPopupSlides img'));
    const dotsWrap = document.getElementById('btsPopupDots');
    let slideIdx = 0, slideTimer = null;
    if(slides.length && dotsWrap){
      dotsWrap.innerHTML = slides.map((_,i) =>
        `<button type="button" data-bts-dot="${i}" aria-label="Flyer ${i+1}" class="${i===0?'is-on':''}"></button>`).join('');
      const dots = Array.from(dotsWrap.querySelectorAll('button'));
      const show = (i) => {
        slideIdx = (i + slides.length) % slides.length;
        slides.forEach((s,j) => s.classList.toggle('is-on', j === slideIdx));
        dots.forEach((d,j) => d.classList.toggle('is-on', j === slideIdx));
      };
      const auto = () => { slideTimer = setInterval(() => show(slideIdx + 1), 3500); };
      dotsWrap.addEventListener('click', (e) => {
        const d = e.target.closest('[data-bts-dot]');
        if(!d) return;
        clearInterval(slideTimer);
        show(parseInt(d.getAttribute('data-bts-dot'), 10));
        auto();
      });
      if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) auto();
    }

    let seen = false;
    try { seen = sessionStorage.getItem('fb_bts_popup') === '1'; } catch(e){}
    if(!seen){
      setTimeout(() => {
        // don't interrupt an open barber profile / booking modal
        const busy = document.querySelector('.modal.open, .lightbox.open');
        if(!busy){
          openPopup();
          try { sessionStorage.setItem('fb_bts_popup','1'); } catch(e){}
        }
      }, 1100);
    }
  }

  applyBtsLang(initialLang);
})();
