/* ============ FAMILY BARBERSHOP — $20 OFFER LANDING PAGE ============
   Bilingual (EN/ES) ad LP. Renders the shared roster (barbers-data.js) as
   direct-book cards that route each barber to THEIR OWN book — Booksy,
   WhatsApp, or their in-shop GHL calendar. Full Meta Pixel + CAPI tracking
   (PageView / ViewContent / Lead) with shared event_id de-dup. */

const BARBERS = window.FB_BARBERS || [];

function telLink(phone){ return '+1' + (phone || '').replace(/\D/g,''); }
function firstName(name){ return (name || '').split(' ')[0]; }

/* ---- which book does this barber use? ---- */
function bookingMethod(b){
  if(b.booksyUrl)   return 'booksy';
  if(b.whatsappUrl) return 'whatsapp';
  return 'calendar'; // in-shop GHL calendar
}

/* ============ META PIXEL + CAPI ============ */
/* Fires a standard event to BOTH the browser pixel and the server-side CAPI
   relay (/api/capi) sharing ONE event_id so Meta de-duplicates them into a
   single event. Fire-and-forget + try/catch so tracking can never block a tap. */
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

/* ============ I18N ============ */
const I18N = {
  es: {
    'bar': '★ Atención Kissimmee — solo martes y miércoles · <strong>$20</strong> todos los cortes',
    'logo.tag': 'Family Barbershop · Kissimmee, FL',
    'hook': 'No pagues $35 por tu próximo corte.',
    'h1.rest': 'Todos los cortes',
    'kicker': 'Todos los martes y miércoles',
    'sub': 'Fades, perfilados y cortes de niño con barbero máster — cejas incluidas. Añade la barba por $25. Sin cupón ni letra chiquita — solo escoge tu barbero abajo.',
    'pill': '+ Añade barba =',
    'guarantee': '¿No quedó fresco? Lo arreglamos.',
    'cta.pick': 'Escoge tu barbero',
    'micro': 'Agenda directo con tu barbero — Booksy, WhatsApp o texto.',
    'trust.rating': 'Calificación Google',
    'trust.barbers': 'Barberos Máster',
    'trust.years': 'Años de Experiencia',
    'b1': '<b>$20</b> por CUALQUIER corte — martes y miércoles',
    'b2': 'Cejas incluidas en <b>cada corte</b>',
    'b3': 'Niños y adultos — <b>toda la familia</b>',
    'b4': 'Añade el perfilado completo de barba por solo <b>$25</b>',
    'b5': '<b>7 barberos máster</b> — escoge al de tu confianza',
    'b6': 'Llega sin cita, o <b>asegura tu silla</b> en línea',
    'barbers.eyebrow': 'Escoge Tu Silla',
    'barbers.h2': 'Escoge tu barbero. <em>Agenda directo.</em>',
    'barbers.sub': 'Cada barbero maneja su propia agenda. Toca el tuyo y asegura tu silla de $20 para el martes o miércoles — por Booksy, WhatsApp o directo en el calendario.',
    'barbers.note': 'Especial de $20 válido martes y miércoles · Llega sin cita — agendar te asegura la silla.',
    'proof.eyebrow': 'Reseñas',
    'proof.h2': 'Kissimmee <em>habla.</em>',
    'proof.q1': '"El mejor fade de Kissimmee, sin discusión. ¿Veinte pesos un martes? Hecho."',
    'proof.q2': '"Llevé a mi hijo por el corte de $20 y le hicieron las cejas también. Ya somos clientes fijos."',
    'proof.q3': '"Agendé con mi barbero por WhatsApp en diez segundos. Sin tanta llamada."',
    'cta1.h2': 'Tu silla de $20 <em>te espera.</em>',
    'cta1.sub': 'Solo martes y miércoles. Escoge tu barbero y agenda en 30 segundos.',
    'faq.eyebrow': 'Preguntas',
    'faq.h2': 'Antes de <em>sentarte.</em>',
    'faq.q1': '¿De verdad son $20?',
    'faq.a1': 'Sí — cada corte cuesta $20 los martes y miércoles. Niños y adultos, cejas incluidas. Añade el perfilado de barba por $25.',
    'faq.q2': '¿Qué días aplica el especial de $20?',
    'faq.a2': 'Martes y miércoles, de 8 AM a 5:30 PM. Los demás días aplica nuestro precio regular.',
    'faq.q3': '¿Necesito cita?',
    'faq.a3': 'Aceptamos sin cita, pero agendar con tu barbero te asegura la silla y te evita la espera. Escoge tu barbero arriba.',
    'faq.q4': '¿Incluye cortes de niño?',
    'faq.a4': 'Sí — niños y adultos, los mismos $20 todos los martes y miércoles.',
    'faq.q5': '¿Y si quiero la barba también?',
    'faq.a5': 'Añade el perfilado completo de barba a cualquier corte por solo $25 en total.',
    'faq.q6': '¿Dónde están ubicados?',
    'faq.a6': '2611 Simpson Rd, Kissimmee, FL 34744 — abierto martes a sábado, de 8 AM a 5:30 PM. Llama o escribe al <a href="tel:+14079708677">(407) 970-8677</a>.',
    'visit.eyebrow': 'Visítanos',
    'visit.h2': '2611 Simpson Rd, <em>Kissimmee.</em>',
    'visit.addr': 'Dirección',
    'visit.hours': 'Horario',
    'visit.hoursv': 'Mar – Sáb &nbsp; 8 AM – 5:30 PM<br/>Dom y Lun &nbsp; Cerrado',
    'visit.phone': 'Teléfono',
    'visit.ig': 'Instagram',
    'visit.directions': 'Cómo llegar',
    'modal.book': 'Agenda Con',
    'modal.newtab': '¿Problemas para cargar? Abre la reservación en otra pestaña →'
  }
};
/* dynamic (per-card / per-modal) strings */
const I18N_DYN = {
  en: { bookWith:'Book with', booksy:'On Booksy', whatsapp:'On WhatsApp', calendar:'Books Online', yrs:'yrs', soon:'Online booking coming soon. Call' },
  es: { bookWith:'Agenda con', booksy:'Por Booksy', whatsapp:'Por WhatsApp', calendar:'Agenda En Línea', yrs:'años', soon:'Reservación en línea muy pronto. Llama al' }
};

let LANG = 'en';
const EN_CACHE = new Map(); // element -> original EN innerHTML

function cacheEN(){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if(!EN_CACHE.has(el)) EN_CACHE.set(el, el.innerHTML);
  });
}
function applyLang(lang){
  LANG = (lang === 'es') ? 'es' : 'en';
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(LANG === 'es' && I18N.es[key] != null) el.innerHTML = I18N.es[key];
    else if(EN_CACHE.has(el)) el.innerHTML = EN_CACHE.get(el);
  });
  document.querySelectorAll('.lp-lang button').forEach(b =>
    b.classList.toggle('is-on', b.getAttribute('data-lang') === LANG));
  try { localStorage.setItem('fb_lp_lang', LANG); } catch(e){}
  renderBarbers(); // dynamic card text depends on language
}

/* ============ RENDER BARBER CARDS ============ */
const BADGE_ICONS = {
  booksy:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.3A8.5 8.5 0 1 1 21 11.5z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v3l2 1"/></svg>'
};
const grid = document.getElementById('lpBarbersGrid');

function barberCardHTML(b){
  const m = bookingMethod(b);
  const dyn = I18N_DYN[LANG];
  return `
  <article class="lp-bcard" data-barber="${b.id}">
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
      <button class="lp-book" data-book="${b.id}" aria-label="${dyn.bookWith} ${b.name}">
        ${dyn.bookWith} ${firstName(b.name)}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
    </div>
  </article>`;
}
function renderBarbers(){
  if(grid) grid.innerHTML = BARBERS.map(barberCardHTML).join('');
}

/* ============ BOOKING — route each barber to THEIR book ============ */
const modal     = document.getElementById('bookModal');
const bookEmbed  = document.getElementById('bookEmbed');
const bookNewTab = document.getElementById('bookNewTab');
const mAvatar    = document.getElementById('mAvatar');
const bookTitle  = document.getElementById('bookTitle');
const mSpec      = document.getElementById('mSpec');

function openModal(b){
  mAvatar.style.backgroundImage = `url('${b.photo}')`;
  bookTitle.textContent = b.name;
  mSpec.textContent = `${b.specialty} · ${b.years || ''} ${I18N_DYN[LANG].yrs} · ★ ${(b.rating||5).toFixed(1)}`;
  if(b.calendarUrl){
    const calId = b.calendarUrl.split('/').pop();
    bookEmbed.innerHTML =
      `<iframe src="${b.calendarUrl}" class="ghl-book-frame" id="${calId}_booking" scrolling="yes" title="Book with ${b.name}" loading="lazy"></iframe>`;
    bookNewTab.href = b.calendarUrl;
    bookNewTab.style.display = '';
  } else {
    bookEmbed.innerHTML =
      `<p class="tiny center" style="padding:40px 0">${I18N_DYN[LANG].soon} <a href="tel:${telLink(b.phone)}" style="color:var(--red)">${b.phone||''}</a>.</p>`;
    bookNewTab.style.display = 'none';
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  bookEmbed.innerHTML = '';
}

/* Fire the Lead, then send the customer to that barber's own booking
   destination (Booksy / WhatsApp open in a new tab; in-shop calendar opens
   in the embedded modal). */
function bookBarber(b){
  const method = bookingMethod(b);
  fbTrack('Lead', {
    content_name: b.name,
    content_category: 'appointment_booking',
    booking_method: method,
    promo: 'tue_wed_20',
    value: 20,
    currency: 'USD'
  });
  if(b.booksyUrl){   window.open(b.booksyUrl,   '_blank', 'noopener'); return; }
  if(b.whatsappUrl){ window.open(b.whatsappUrl, '_blank', 'noopener'); return; }
  openModal(b);
}

document.addEventListener('click', (e) => {
  const bk = e.target.closest('[data-book]');
  if(bk){
    const b = BARBERS.find(x => x.id === bk.getAttribute('data-book'));
    if(b) bookBarber(b);
    return;
  }
  if(e.target.matches('[data-close]')){ closeModal(); return; }
  const lang = e.target.closest('[data-lang]');
  if(lang){ applyLang(lang.getAttribute('data-lang')); return; }
  const sc = e.target.closest('[data-scroll-target]');
  if(sc){
    const t = document.querySelector(sc.getAttribute('data-scroll-target'));
    if(t) t.scrollIntoView({ behavior:'smooth' });
    return;
  }
});
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

/* ============ VIEWCONTENT — viewed the barber roster ============ */
function watchRoster(){
  if(!grid || !('IntersectionObserver' in window)){ return; }
  let fired = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting && !fired){
        fired = true;
        fbTrack('ViewContent', { content_name:'pick_your_barber', content_category:'barber_roster' });
        io.disconnect();
      }
    });
  }, { threshold: 0.25 });
  io.observe(grid);
}

/* ============ INIT ============ */
(function init(){
  cacheEN();
  let saved = null;
  try { saved = localStorage.getItem('fb_lp_lang'); } catch(e){}
  const initial = saved || ((navigator.language||'').toLowerCase().startsWith('es') ? 'es' : 'en');
  applyLang(initial);          // also renders the barber cards
  watchRoster();
  fbTrack('PageView');         // browser + CAPI, shared event_id
})();
