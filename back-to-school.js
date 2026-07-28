/* ============ FAMILY BARBERSHOP — BACK-TO-SCHOOL LP (page 1 of 2) ============
   Aug 3–8 promo: $20 cut + brows, ALL students 16 & under (new and regular clients).
   THIS page sells the offer: the looks (kids' cuts), how it works, scarcity.
   Booking happens on page 2 (/back-to-school-book) — every "Book Their
   Appointment" tap navigates there. Bilingual EN/ES like the /offer LP.
   Meta Pixel + CAPI: PageView, ViewContent (book CTA tap → bts_book_cta). */

/* Promo window (Eastern) — countdown flips from "starts in" to "ends in". */
const BTS_START = new Date('2026-08-03T00:00:00-04:00');
const BTS_END   = new Date('2026-08-08T23:59:59-04:00');

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
    'bar': '★ Papás de Kissimmee — solo del 3 al 8 de agosto · <strong>$20</strong> corte + cejas de regreso a clases',
    'logo.tag': 'Family Barbershop · Kissimmee, FL',
    'hook': 'No los mandes de regreso con el corte del verano.',
    'h1.rest': 'Corte + Cejas',
    'kicker': 'PARA TODOS LOS ESTUDIANTES hasta 16 años · Del 3 al 8 de agosto',
    'sub': 'Una semana nada más. Baja para ver los cortes del primer día y reserva su silla — toma como un minuto.',
    'pill': 'Cupos limitados',
    'cta.book': 'Reserva Su Cita',
    'cta.looks': 'Ver Los Cortes',
    'micro': 'En la próxima página escoges su barbero — Booksy, WhatsApp o su calendario.',
    'trust.barbers': 'Barberos Máster',
    'trust.years': 'Años de Experiencia',
    'cuts.eyebrow': 'Los Cortes',
    'cuts.h2': 'Escoge su <em>look del primer día.</em>',
    'cuts.sub': 'Cada corte de abajo es el mismo especial — <strong>$20 con cejas incluidas</strong>, hecho por un barbero máster. Toca una foto para verla en grande y muéstrasela al barbero. Él se encarga del resto.',
    'cuts.c1': 'Fade con Rizos',
    'cuts.c2': 'Diseño Freestyle',
    'cuts.c3': 'Taper Bajo',
    'cuts.c4': 'Skin Fade',
    'cuts.c5': 'Corte Clásico',
    'cuts.c6': 'Lineup Nítido',
    'cuts.note': '¿No ves su estilo? Cualquier corte de estudiante cuenta — $20 con cejas incluidas, del 3 al 8 de agosto, para todos los estudiantes.',
    'how.eyebrow': 'Cómo Funciona',
    'how.h2': 'Tres pasos. <em>Nada más.</em>',
    'how.s1t': 'Reserva su silla',
    'how.s1b': 'Toca el botón de abajo, escoge su barbero y una hora entre el <strong>3 y el 8 de agosto</strong>. Toma como un minuto.',
    'how.s2t': 'Tráelo a la barbería',
    'how.s2b': 'Muéstrale al barbero el corte que escogiste. Corte + cejas, listo en unos 30 minutos.',
    'how.s3t': 'Listo pa’l primer día',
    'how.s3b': 'Pagas <strong>$20</strong> en la barbería. Para todos los estudiantes, nuevos y de siempre — ese es todo el deal, sin letra chiquita.',
    'visit.eyebrow': 'Visítanos',
    'visit.addr': 'Dirección',
    'visit.hours': 'Horario',
    'visit.phone': 'Teléfono',
    'visit.directions': 'Cómo llegar',
    'closer.h2': 'Una semana. <em>$20. Corte nuevo.</em>',
    'closer.reassure': 'PARA TODOS LOS ESTUDIANTES hasta 16 años · Corte + cejas · Del 3 al 8 de agosto · Cupos limitados.',
    'closer.hoursv': 'Lun – Sáb · 9 AM – 7 PM · Dom 10 AM – 2 PM'
  }
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
  renderCountdown();
}

/* ============ COUNTDOWN (starts-in → ends-in → ended) ============ */
const CD = {
  en: { starts:'Starts Mon Aug 3 — ', ends:'Offer ends in ', d:'d', h:'h', m:'m', left:' left to reserve', over:'This offer has ended — regular pricing applies.' },
  es: { starts:'Empieza el lun 3 de agosto — ', ends:'La oferta termina en ', d:'d', h:'h', m:'m', left:' para reservar', over:'Esta oferta terminó — aplican precios regulares.' }
};
function renderCountdown(){
  const t = CD[LANG];
  const now = Date.now();
  let html;
  if(now > BTS_END.getTime()){
    html = t.over;
  } else {
    const pre = now < BTS_START.getTime();
    const target = pre ? BTS_START.getTime() : BTS_END.getTime();
    let ms = Math.max(0, target - now);
    const d = Math.floor(ms / 86400000); ms -= d * 86400000;
    const h = Math.floor(ms / 3600000);  ms -= h * 3600000;
    const m = Math.floor(ms / 60000);
    const clock = `<strong>${d}${t.d} ${h}${t.h} ${m}${t.m}</strong>`;
    html = pre ? (t.starts + clock + t.left) : (t.ends + clock);
  }
  document.querySelectorAll('[data-bts-countdown]').forEach(el => { el.innerHTML = html; });
}
setInterval(renderCountdown, 30 * 1000);

/* ============ HERO FLYER CAROUSEL ============ */
(function(){
  const slides = Array.from(document.querySelectorAll('#btsLpSlides img'));
  const dotsWrap = document.getElementById('btsLpDots');
  if(!slides.length || !dotsWrap) return;
  let idx = 0, timer = null;
  dotsWrap.innerHTML = slides.map((_,i) =>
    `<button type="button" data-bts-dot="${i}" aria-label="Photo ${i+1}" class="${i===0?'is-on':''}"></button>`).join('');
  const dots = Array.from(dotsWrap.querySelectorAll('button'));
  const show = (i) => {
    idx = (i + slides.length) % slides.length;
    slides.forEach((s,j) => s.classList.toggle('is-on', j === idx));
    dots.forEach((d,j) => d.classList.toggle('is-on', j === idx));
  };
  const auto = () => { timer = setInterval(() => show(idx + 1), 3500); };
  dotsWrap.addEventListener('click', (e) => {
    const d = e.target.closest('[data-bts-dot]');
    if(!d) return;
    clearInterval(timer);
    show(parseInt(d.getAttribute('data-bts-dot'), 10));
    auto();
  });
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) auto();
})();

/* ============ LIGHTBOX (cut photos — swipe / pinch / zoom) ============ */
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
function lbClose(){ if(!lb) return; lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; lbPointers.clear(); lbPinchStart = null; lbDragging = false; }
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
    if (e.key === 'Escape')     { lbClose(); }
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

/* Tap a look → full-screen lightbox */
(function(){
  const cards = Array.from(document.querySelectorAll('#cutsGrid .cut-card'));
  cards.forEach((c, i) => {
    c.addEventListener('click', () => {
      lbList = cards.map(cc => { const im = cc.querySelector('img'); return { src: im.currentSrc || im.src, alt: im.alt }; });
      lbOpen(i);
    });
  });
})();

/* ============ EVENTS ============ */
document.addEventListener('click', (e) => {
  const lang = e.target.closest('[data-lang]');
  if(lang){ applyLang(lang.getAttribute('data-lang')); return; }
  const sc = e.target.closest('[data-scroll]');
  if(sc){
    const t = document.querySelector(sc.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({ behavior:'smooth' }); }
    return;
  }
  // book CTA → page 2 (fire the funnel event, let navigation proceed)
  const bk = e.target.closest('[data-book-cta]');
  if(bk){
    fbTrack('ViewContent', { content_name: 'bts_book_cta', content_category: 'promo_funnel' });
    // anchor navigation to /back-to-school-book proceeds naturally
    if(bk.tagName !== 'A'){ location.href = '/back-to-school-book'; }
  }
});

/* ============ INIT ============ */
(function init(){
  cacheEN();
  let saved = null;
  try { saved = localStorage.getItem('fb_lp_lang'); } catch(e){}
  const initial = saved || ((navigator.language||'').toLowerCase().startsWith('es') ? 'es' : 'en');
  applyLang(initial);
  fbTrack('PageView');
})();
