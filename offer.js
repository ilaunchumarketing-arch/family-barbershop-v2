/* ============ FAMILY BARBERSHOP — $20 OFFER LANDING PAGE ============
   Lean bilingual (EN/ES) ad LP. Barber cards open the SAME profile modal as
   the main website (headshot + bio + work-photo gallery + lightbox); the
   "Book with [barber]" button inside the profile routes each barber to THEIR
   OWN book — Booksy, WhatsApp, or their in-shop GHL calendar.
   Full Meta Pixel + CAPI: PageView, ViewContent (profile open), Lead (book). */

const BARBERS = window.FB_BARBERS || [];

function telLink(phone){ return '+1' + (phone || '').replace(/\D/g,''); }
function firstName(name){ return (name || '').split(' ')[0]; }
function bookingMethod(b){
  if(b.booksyUrl)   return 'booksy';
  if(b.whatsappUrl) return 'whatsapp';
  return 'calendar'; // in-shop GHL calendar
}

/* ============ META PIXEL + CAPI ============ */
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
        event_name: eventName, event_id: eventId, event_source_url: location.href,
        custom_data: custom, fbp: _fbCookie('_fbp'), fbc: _fbCookie('_fbc'), test_event_code: tec
      })
    }).catch(function(){});
  } catch(e){}
}

/* ============ I18N ============ */
const I18N = {
  es: {
    'bar': '★ Atención Kissimmee — solo martes y miércoles · <strong>$20</strong> todos los cortes',
    'logo.tag': 'Family Barbershop · Kissimmee, FL',
    'hook': 'No pagues $35 por tu próximo corte.',
    'h1.rest': 'Todos los cortes',
    'kicker': 'Todos los martes y miércoles',
    'sub': 'Niños y adultos · cejas incluidas · añade la barba por $25. Escoge tu barbero y agenda tu silla abajo.',
    'pill': '+ Añade barba =',
    'guarantee': '¿No quedó fresco? Lo arreglamos.',
    'cta.pick': 'Escoge tu barbero',
    'micro': 'Agenda directo con tu barbero — Booksy, WhatsApp o texto.',
    'trust.rating': 'Calificación Google',
    'trust.barbers': 'Barberos Máster',
    'trust.years': 'Años de Experiencia',
    'barbers.eyebrow': 'Escoge Tu Silla',
    'barbers.h2': 'Escoge tu barbero. <em>Agenda directo.</em>',
    'barbers.sub': 'Toca tu barbero para ver su trabajo y asegura tu silla de $20 para el martes o miércoles — directo en su propia agenda.',
    'barbers.note': 'Especial de $20 válido martes y miércoles · Llega sin cita — agendar te asegura la silla.',
    'visit.eyebrow': 'Visítanos',
    'visit.addr': 'Dirección',
    'visit.hours': 'Horario',
    'visit.phone': 'Teléfono',
    'visit.directions': 'Cómo llegar',
    'closer.h2': 'Martes y miércoles. <em>$20. Así de fácil.</em>',
    'closer.reassure': 'Sin cita · Niños y adultos · Cejas incluidas · Añade barba $25.',
    'closer.hoursv': 'Mar – Sáb · 8 AM – 5:30 PM · Cerrado Dom y Lun',
    'modal.book': 'Agenda Con',
    'modal.newtab': '¿Problemas para cargar? Abre la reservación en otra pestaña →'
  }
};
/* dynamic (per-card / per-profile) strings */
const DYN = {
  en: { view:'View Profile', bookWith:'Book with', booksy:'On Booksy', whatsapp:'On WhatsApp', calendar:'Books Online',
        yrs:'yrs', yrsExp:'years experience', reviews:'reviews', from:'From', work:'Work', recent:'recent cuts',
        soon:'Online booking coming soon. Call' },
  es: { view:'Ver Perfil', bookWith:'Agenda con', booksy:'Por Booksy', whatsapp:'Por WhatsApp', calendar:'Agenda En Línea',
        yrs:'años', yrsExp:'años de experiencia', reviews:'reseñas', from:'Desde', work:'Trabajos', recent:'cortes recientes',
        soon:'Reservación en línea muy pronto. Llama al' }
};

let LANG = 'en';
const EN_CACHE = new Map();
function cacheEN(){ document.querySelectorAll('[data-i18n]').forEach(el => { if(!EN_CACHE.has(el)) EN_CACHE.set(el, el.innerHTML); }); }
function applyLang(lang){
  LANG = (lang === 'es') ? 'es' : 'en';
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(LANG === 'es' && I18N.es[key] != null) el.innerHTML = I18N.es[key];
    else if(EN_CACHE.has(el)) el.innerHTML = EN_CACHE.get(el);
  });
  document.querySelectorAll('.lp-lang button').forEach(b => b.classList.toggle('is-on', b.getAttribute('data-lang') === LANG));
  try { localStorage.setItem('fb_lp_lang', LANG); } catch(e){}
  renderBarbers();
}

/* ============ BARBER CARDS (tap = open profile, just like the website) ============ */
const BADGE_ICONS = {
  booksy:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.3A8.5 8.5 0 1 1 21 11.5z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v3l2 1"/></svg>'
};
const grid = document.getElementById('lpBarbersGrid');

function barberCardHTML(b){
  const m = bookingMethod(b), dyn = DYN[LANG];
  return `
  <button class="lp-bcard" data-profile="${b.id}" aria-label="${dyn.view}: ${b.name}">
    <div class="lp-bcard-photo">
      <span class="lp-bcard-rate"><span class="star">★</span>${(b.rating||5).toFixed(1)}</span>
      <img src="${b.photo}" alt="${b.name}, ${b.specialty}" loading="lazy" />
      <div class="lp-bcard-id">
        <h3>${b.name}</h3>
        <span class="lp-bcard-spec">${b.specialty}</span>
      </div>
    </div>
    <div class="lp-bcard-body">
      <div class="lp-bcard-meta">
        <span class="lp-badge ${m}">${BADGE_ICONS[m]}${dyn[m]}</span>
        ${b.years ? `<span class="lp-bcard-yrs">${b.years} ${dyn.yrs}</span>` : ''}
      </div>
      <span class="lp-book">
        ${dyn.view}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </span>
    </div>
  </button>`;
}
function renderBarbers(){ if(grid) grid.innerHTML = BARBERS.map(barberCardHTML).join(''); }

/* ============ PROFILE MODAL (ported from the website) ============ */
const profileModal = document.getElementById('profileModal');
const profileBody  = document.getElementById('profileBody');

function masterBadge(){
  return `<span class="bp-master" style="position:absolute;top:16px;right:16px;z-index:5;display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;background:rgba(10,10,12,.78);border:1px solid var(--line-2);font-family:var(--ff-body);font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2l2.6 6.6L22 9.3l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.9L2 9.3l7.4-.7L12 2z"/></svg> Master Barber</span>`;
}
/* only show the work gallery when the barber has REAL (local) cut photos —
   never show stock images as a barber's portfolio */
function hasRealCuts(b){
  return Array.isArray(b.cuts) && b.cuts.length > 0 && b.cuts.every(c => c.startsWith('img/'));
}
function buildProfileHTML(b){
  const dyn = DYN[LANG], fn = firstName(b.name), m = bookingMethod(b);
  return `
    <div class="bp-top">
      <div class="bp-photo">
        <span class="status ${b.status}">${b.statusText}</span>
        ${b.featured ? masterBadge() : ''}
        <img src="${b.photo}" alt="${b.name}, ${b.specialty}" />
      </div>
      <div class="bp-info">
        <span class="bp-eyebrow"><span class="dot"></span> ${b.years} ${dyn.yrsExp}</span>
        <h3 class="bp-name">${b.name}</h3>
        <div class="bp-spec">${b.specialty}</div>
        <div class="bp-stats">
          <div class="bp-stat"><span class="star">★</span><strong>${(b.rating||5).toFixed(1)}</strong><small>${b.reviews||''} ${dyn.reviews}</small></div>
          <span class="bp-sep">·</span>
          <div class="bp-stat bp-price">${dyn.from}<strong>$${b.price}</strong></div>
        </div>
        <p class="bp-bio">${b.bio||''}</p>
        <div class="barber-contact">
          <a href="tel:${telLink(b.phone)}" class="barber-phone" aria-label="Call ${fn}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
            ${b.phone||''}
          </a>
          <a href="https://instagram.com/${b.instagram}" target="_blank" rel="noopener" class="barber-ig" aria-label="${fn} on Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            @${b.instagram}
          </a>
        </div>
        <button class="barber-book bp-book" data-book="${b.id}" aria-label="${dyn.bookWith} ${b.name}">
          ${dyn.bookWith} ${fn}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
    ${hasRealCuts(b) ? `
    <div class="bp-gallery-head">
      <h4>${fn} · ${dyn.work}</h4>
      <span>${b.cuts.length} ${dyn.recent}</span>
    </div>
    <div class="bp-gallery">
      ${b.cuts.map(c => `<div class="bp-shot"><img src="${c}" alt="Recent cut by ${b.name}" loading="lazy"/></div>`).join('')}
    </div>` : ''}`;
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

/* ============ BOOKING — route each barber to THEIR own book ============ */
const modal      = document.getElementById('bookModal');
const bookEmbed  = document.getElementById('bookEmbed');
const bookNewTab = document.getElementById('bookNewTab');
const mAvatar    = document.getElementById('mAvatar');
const bookTitle  = document.getElementById('bookTitle');
const mSpec      = document.getElementById('mSpec');

function openModal(b){
  mAvatar.style.backgroundImage = `url('${b.photo}')`;
  bookTitle.textContent = b.name;
  mSpec.textContent = `${b.specialty} · ${b.years || ''} ${DYN[LANG].yrs} · ★ ${(b.rating||5).toFixed(1)}`;
  if(b.calendarUrl){
    const calId = b.calendarUrl.split('/').pop();
    bookEmbed.innerHTML = `<iframe src="${b.calendarUrl}" class="ghl-book-frame" id="${calId}_booking" scrolling="yes" title="Book with ${b.name}" loading="lazy"></iframe>`;
    bookNewTab.href = b.calendarUrl; bookNewTab.style.display = '';
  } else {
    bookEmbed.innerHTML = `<p class="tiny center" style="padding:40px 0">${DYN[LANG].soon} <a href="tel:${telLink(b.phone)}" style="color:var(--red)">${b.phone||''}</a>.</p>`;
    bookNewTab.style.display = 'none';
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  if(!profileModal.classList.contains('open')) document.body.style.overflow = '';
  bookEmbed.innerHTML = '';
}
/* Fire the Lead, then send the customer to that barber's own destination. */
function bookBarber(b){
  fbTrack('Lead', {
    content_name: b.name, content_category: 'appointment_booking',
    booking_method: bookingMethod(b), promo: 'tue_wed_20', value: 20, currency: 'USD'
  });
  if(b.booksyUrl){   window.open(b.booksyUrl,   '_blank', 'noopener'); return; }
  if(b.whatsappUrl){ window.open(b.whatsappUrl, '_blank', 'noopener'); return; }
  closeProfile();
  openModal(b);
}

/* ============ EVENTS ============ */
document.addEventListener('click', (e) => {
  const prof = e.target.closest('[data-profile]');
  if(prof){
    const b = BARBERS.find(x => x.id === prof.getAttribute('data-profile'));
    if(b) fbTrack('ViewContent', { content_name: b.name, content_category: 'barber_profile' });
    openProfile(prof.getAttribute('data-profile'));
    return;
  }
  const bk = e.target.closest('[data-book]');
  if(bk){ const b = BARBERS.find(x => x.id === bk.getAttribute('data-book')); if(b) bookBarber(b); return; }
  if(e.target.closest('[data-profile-close]')){ closeProfile(); return; }
  if(e.target.matches('[data-close]')){ closeModal(); return; }
  const lang = e.target.closest('[data-lang]');
  if(lang){ applyLang(lang.getAttribute('data-lang')); return; }
  const sc = e.target.closest('[data-scroll-target]');
  if(sc){ const t = document.querySelector(sc.getAttribute('data-scroll-target')); if(t) t.scrollIntoView({ behavior:'smooth' }); return; }
});
document.addEventListener('keydown', (e) => { if(e.key === 'Escape'){ closeModal(); closeProfile(); lbClose(); } });

/* ============ LIGHTBOX (ported from the website) ============ */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');
const lbStage = document.getElementById('lbStage');
let lbList = [], lbIdx = 0, lbScale = 1, lbX = 0, lbY = 0, lbDragging = false, lbDragStart = null;
const lbPointers = new Map();
let lbPinchStart = null, lbLastTap = 0;
function lbApply(){ lbImg.style.transform = `translate(${lbX}px, ${lbY}px) scale(${lbScale})`; }
function lbReset(animate){
  lbScale = 1; lbX = 0; lbY = 0;
  if(animate){ lbImg.style.transition = 'transform .25s ease'; lbApply(); setTimeout(()=>{ lbImg.style.transition = ''; }, 260); }
  else { lbApply(); }
}
function lbLoad(){ const it = lbList[lbIdx]; lbImg.src = it.src; lbImg.alt = it.alt || ''; lbCounter.textContent = `${lbIdx+1} / ${lbList.length}`; lbReset(false); }
function lbOpen(i){ lbIdx = i; lbLoad(); lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; }
function lbClose(){ if(!lb) return; lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); if(!profileModal.classList.contains('open')&&!modal.classList.contains('open')) document.body.style.overflow=''; lbPointers.clear(); lbPinchStart = null; lbDragging = false; }
function lbStep(d){ lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbLoad(); }
if(lb){
  lb.addEventListener('click', (e) => {
    if (e.target.matches('[data-lb-close]')) { lbClose(); return; }
    if (e.target.matches('[data-lb-prev]'))  { lbStep(-1); return; }
    if (e.target.matches('[data-lb-next]'))  { lbStep(+1); return; }
    if (e.target === lb || e.target === lbStage) lbClose();
  });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  { lbStep(-1); }
    if (e.key === 'ArrowRight') { lbStep(+1); }
  });
  lbStage.addEventListener('wheel', (e) => {
    if (!lb.classList.contains('open')) return;
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.18 : 1/1.18;
    lbScale = Math.min(5, Math.max(1, lbScale * factor));
    if (lbScale === 1) { lbX = 0; lbY = 0; }
    lbApply();
  }, { passive: false });
  lbImg.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    if (lbScale > 1) lbReset(true);
    else { lbScale = 2.5; lbImg.style.transition = 'transform .25s ease'; lbApply(); setTimeout(()=>{lbImg.style.transition='';},260); }
  });
  lbImg.addEventListener('pointerdown', (e) => {
    lbPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (lbPointers.size === 1) {
      if (e.pointerType === 'touch') {
        const now = Date.now();
        if (now - lbLastTap < 300) {
          if (lbScale > 1) lbReset(true);
          else { lbScale = 2.5; lbImg.style.transition = 'transform .25s ease'; lbApply(); setTimeout(()=>{lbImg.style.transition='';},260); }
          lbLastTap = 0; return;
        }
        lbLastTap = now;
      }
      if (lbScale > 1) { lbDragging = true; lbDragStart = { x: e.clientX - lbX, y: e.clientY - lbY }; lbImg.setPointerCapture(e.pointerId); }
    } else if (lbPointers.size === 2) {
      const pts = [...lbPointers.values()];
      lbPinchStart = { d: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y), s: lbScale };
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
    } else if (lbDragging && lbScale > 1) { lbX = e.clientX - lbDragStart.x; lbY = e.clientY - lbDragStart.y; lbApply(); }
  });
  const lbPointerEnd = (e) => { lbPointers.delete(e.pointerId); if (lbPointers.size < 2) lbPinchStart = null; if (lbPointers.size === 0) lbDragging = false; };
  lbImg.addEventListener('pointerup', lbPointerEnd);
  lbImg.addEventListener('pointercancel', lbPointerEnd);
  lbImg.addEventListener('lostpointercapture', lbPointerEnd);
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
}

/* ============ INIT ============ */
(function init(){
  cacheEN();
  let saved = null;
  try { saved = localStorage.getItem('fb_lp_lang'); } catch(e){}
  const initial = saved || ((navigator.language||'').toLowerCase().startsWith('es') ? 'es' : 'en');
  applyLang(initial);  // renders the barber cards
  fbTrack('PageView');
})();
