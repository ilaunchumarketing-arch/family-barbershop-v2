/* ============ FAMILY BARBERSHOP — v3 ============ */

const BARBERS = [
  {
    id: "elvin",
    name: "Elvin Rodriguez",
    specialty: "Master Barber",
    years: 21,
    rating: 5.0,
    reviews: 612,
    price: 45,
    status: "open",
    statusText: "Open Today",
    featured: true,
    phone: "(407) 242-3301",
    instagram: "elvin.cuts",
    bio: "Con 21 años de experiencia como barbero profesional, Elvin es uno de los maestros del oficio en Family Barbershop. Su pasión por las líneas perfectas, los fades limpios y el cuidado de cada cliente lo convierten en una pieza fundamental del equipo.",
    tags: ["Skin Fades", "Líneas Precisas", "Diseños"],
    photo: "img/elvin_profile.jpg",
    cuts: [
      "img/elvin_work_1.jpg",
      "img/elvin_work_2.jpg",
      "img/elvin_work_3.jpg",
      "img/elvin_work_4.jpg",
      "img/elvin_work_5.jpg",
      "img/elvin_work_6.jpg",
      "img/elvin_work_7.jpg",
      "img/elvin_work_8.jpg"
    ]
  },
  {
    id: "bebo",
    name: "Bebo",
    specialty: "Master Barber",
    years: 10,
    rating: 5.0,
    reviews: 120,
    price: 45,
    status: "open",
    statusText: "Open Today",
    phone: "(850) 346-0980",
    instagram: "family.barbershop",
    bio: "Precision cuts, clean fades. Bringing his craft to Family Barbershop.",
    photo: "img/barber2_profile.jpg",
    cuts: [
      "img/barber2_work_1.jpg",
      "img/barber2_work_2.jpg",
      "img/barber2_work_3.jpg",
      "img/barber2_work_1.jpg"
    ]
  },
  {
    id: "jonathan",
    name: "Jonathan",
    specialty: "Master Barber",
    years: 12,
    rating: 4.9,
    reviews: 287,
    price: 45,
    status: "open",
    statusText: "Open Today",
    phone: "(407) 837-2057",
    instagram: "family.barbershop",
    bio: "Twelve years on the clippers. Jonathan built his reputation on flawless skin fades and a chair-side manner that keeps regulars driving in from three counties.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "joshua",
    name: "Joshua",
    specialty: "Beard & Style Expert",
    years: 10,
    rating: 4.9,
    reviews: 356,
    price: 50,
    status: "open",
    statusText: "Open Today",
    phone: "(407) 989-9306",
    instagram: "josh_the.barber",
    bio: "Ten years and counting. Joshua turns scruff into sculpture — beards, mustaches, and full-face grooming with a straight razor finish.",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "kelvo",
    name: "Kelvo",
    specialty: "Design & Lineup Pro",
    years: 7,
    rating: 4.9,
    reviews: 198,
    price: 45,
    status: "open",
    statusText: "Open Today",
    phone: "(321) 217-1567",
    instagram: "family.barbershop",
    bio: "If you want a logo, a part, or a freehand design in your fade — Kelvo is the artist. Seven years of clean lines and steady hands.",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "rafy",
    name: "Rafy",
    specialty: "Texture Specialist",
    years: 9,
    rating: 4.8,
    reviews: 241,
    price: 40,
    status: "busy",
    statusText: "Next 4:45",
    phone: "(407) 319-7849",
    instagram: "dr.cerquillo",
    bio: "Nine years working with every hair type — curls, waves, coarse, fine. Rafy cuts to your texture, not against it.",
    photo: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "jose",
    name: "Jose",
    specialty: "Classic Cuts Expert",
    years: 15,
    rating: 5.0,
    reviews: 520,
    price: 50,
    status: "open",
    statusText: "Open Today",
    phone: "(786) 234-6663",
    instagram: "jr_dahalloffamer",
    bio: "Fifteen years in the trade. Jose handles the classics — pompadours, side parts, scissor cuts — like the old-school masters who taught him.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "ricardo",
    name: "Ricardo",
    specialty: "Kids & Family Cuts",
    years: 6,
    rating: 4.9,
    reviews: 312,
    price: 25,
    status: "open",
    statusText: "Open Today",
    phone: "(787) 925-7775",
    instagram: "family.barbershop",
    bio: "Six years and a magic touch with kids. Patient, fun, and quick — Ricardo makes the first haircut a tradition, not a fight.",
    photo: "https://images.unsplash.com/photo-1507081323647-4d250478b919?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "yamil",
    name: "Yamil",
    specialty: "Curly & Natural Hair",
    years: 8,
    rating: 4.9,
    reviews: 267,
    price: 45,
    status: "open",
    statusText: "Open Today",
    phone: "(407) 432-9548",
    instagram: "family.barbershop",
    bio: "Eight years specializing in curly and natural textures. Yamil cuts dry, shapes the curl pattern, and finishes with a sponge twist if you want it.",
    photo: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

/* Build a tel: link from a US phone string like "(407) 242-3301" */
function telLink(phone){
  return '+1' + (phone || '').replace(/\D/g,'');
}

/* Render barber cards */
const grid = document.getElementById('barbersGrid');

function renderFeatured(b){
  return `
  <article class="barber-card featured">
    <span class="featured-ribbon">
      <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 2l2.6 6.6L22 9.3l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.9L2 9.3l7.4-.7L12 2z"/></svg>
      Master Barber
    </span>
    <div class="featured-top">
      <div class="featured-photo">
        <span class="status ${b.status}">${b.statusText}</span>
        <img src="${b.photo}" alt="${b.name}, ${b.specialty}" />
      </div>
      <div class="featured-info">
        <span class="featured-eyebrow"><span class="dot"></span> ${b.years} años de experiencia</span>
        <h3 class="featured-name">${b.name}</h3>
        <div class="featured-specialty">${b.specialty}</div>
        <div class="featured-stats">
          <div class="featured-stat"><span class="star">★</span><strong>${b.rating.toFixed(1)}</strong><small>${b.reviews} reviews</small></div>
          <div class="featured-sep">·</div>
          <div class="featured-stat featured-stat-price">From<strong>$${b.price}</strong></div>
        </div>
        <p class="featured-bio">${b.bio}</p>
        ${b.tags ? `<div class="featured-tags">${b.tags.map(t=>`<span>${t}</span>`).join('')}</div>` : ''}
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
        <button class="barber-book featured-book" data-book="${b.id}" aria-label="Book with ${b.name}">
          Book with ${b.name.split(' ')[0]}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
    <div class="featured-gallery-head">
      <h4>El trabajo de ${b.name.split(' ')[0]}</h4>
      <span>${b.cuts.length} cortes recientes</span>
    </div>
    <div class="featured-gallery">
      ${b.cuts.map(c => `<div class="fg-shot"><img src="${c}" alt="Trabajo de ${b.name}" loading="lazy"/></div>`).join('')}
    </div>
  </article>`;
}

function renderStandard(b){
  return `
  <article class="barber-card">
    <div class="barber-photo">
      <span class="status ${b.status}">${b.statusText}</span>
      <img src="${b.photo}" alt="${b.name}, ${b.specialty}" loading="lazy" />
      <div class="barber-overlay">
        <div class="barber-overlay-name">
          <h3>${b.name}</h3>
          <div class="barber-overlay-meta">${b.specialty} · ${b.years} Yrs</div>
        </div>
        <div class="barber-rating" aria-label="Rating ${b.rating} out of 5">
          <div>
            <span class="star">★</span> ${b.rating.toFixed(1)}
            <small>${b.reviews} reviews</small>
          </div>
        </div>
      </div>
    </div>
    <div class="barber-body">
      <p class="barber-bio">${b.bio}</p>
      <div class="portfolio" aria-label="Recent work">
        ${b.cuts.slice(0,4).map(c => `<div class="shot"><img src="${c}" alt="Recent cut by ${b.name.split(' ')[0]}" loading="lazy"/></div>`).join('')}
      </div>
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
      <div class="barber-foot">
        <div class="barber-price">From<strong>$${b.price}</strong></div>
        <button class="barber-book" data-book="${b.id}" aria-label="Book with ${b.name}">
          Book with ${b.name.split(' ')[0]}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </article>`;
}

grid.innerHTML = BARBERS.map(b => b.featured ? renderFeatured(b) : renderStandard(b)).join('');

/* Gallery strip — curated cuts */
const GALLERY = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=500&q=80"
];
document.getElementById('galleryGrid').innerHTML =
  GALLERY.map((g,i) => `<div class="g"><img src="${g}" alt="Recent cut from Family Barbershop" loading="lazy"/></div>`).join('');

/* ============ MODAL BOOKING ============ */
const modal = document.getElementById('bookModal');
const bookForm = document.getElementById('bookingForm');
const bookSuccess = document.getElementById('bookSuccess');
const mAvatar = document.getElementById('mAvatar');
const bookTitle = document.getElementById('bookTitle');
const mSpec = document.getElementById('mSpec');
const okMsg = document.getElementById('okMsg');

function openModal(barberId){
  const b = BARBERS.find(x => x.id === barberId);
  if(!b) return;
  mAvatar.style.backgroundImage = `url('${b.photo}')`;
  bookTitle.textContent = b.name;
  mSpec.textContent = `${b.specialty} · ${b.years} yrs · ★ ${b.rating.toFixed(1)}`;
  bookForm.classList.remove('hide');
  bookSuccess.classList.remove('show');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  const d = new Date(); d.setDate(d.getDate()+1);
  bookForm.querySelector('[name=date]').value = d.toISOString().slice(0,10);
  bookForm.dataset.barber = b.name;
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
document.addEventListener('click', (e) => {
  const bk = e.target.closest('[data-book]');
  if(bk){ openModal(bk.getAttribute('data-book')); }
  if(e.target.matches('[data-close]')){ closeModal(); }
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(bookForm);
  const service = fd.get('service');
  const date = fd.get('date');
  const time = fd.get('time');
  const name = fd.get('name');
  okMsg.innerHTML = `Thanks <strong>${name}</strong>. Your appointment with <strong>${bookForm.dataset.barber}</strong> for <strong>${service}</strong> is set for <strong>${date} at ${time}</strong>. A confirmation text is on the way.`;
  bookForm.classList.add('hide');
  bookSuccess.classList.add('show');
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

// Wire every featured-gallery image into one combined lightbox list so
// navigation flows across all featured barbers' photos.
const featuredImgs = Array.from(document.querySelectorAll('.featured-gallery .fg-shot img'));
featuredImgs.forEach((img, i) => {
  img.addEventListener('click', () => {
    lbList = featuredImgs.map(im => ({ src: im.currentSrc || im.src, alt: im.alt }));
    lbOpen(i);
  });
});

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
