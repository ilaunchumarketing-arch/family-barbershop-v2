/* ============ FAMILY BARBERSHOP — v3 ============ */

const BARBERS = [
  {
    id: "elvin",
    calendarUrl: "https://api.leadconnectorhq.com/widget/booking/t4RNoRPtemFXfWvGvNg2",
    name: "Elvin Rodriguez",
    specialty: "Skin Fades & Designs",
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
    calendarUrl: "https://api.leadconnectorhq.com/widget/booking/st1sxqMHG53Lu5qAh0mK",
    name: "Bebo",
    specialty: "Precision Cuts & Fades",
    featured: true,
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
    id: "peter",
    calendarUrl: "https://api.leadconnectorhq.com/widget/booking/BkxkLoOgz8ajsgvsmClo",
    name: "Peter",
    specialty: "Beard & Style Expert",
    featured: true,
    years: 10,
    rating: 4.9,
    reviews: 356,
    price: 50,
    status: "open",
    statusText: "Open Today",
    phone: "(407) 989-9306",
    instagram: "family.barbershop",
    bio: "Ten years and counting. Peter turns scruff into sculpture — beards, mustaches, and full-face grooming with a straight razor finish.",
    photo: "img/peter_profile.jpg",
    cuts: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "kelvo",
    calendarUrl: "https://api.leadconnectorhq.com/widget/booking/2OVzl5S1rmi6DiLh6EKR",
    name: "Kelvo",
    specialty: "Design & Lineup Pro",
    featured: true,
    years: 7,
    rating: 4.9,
    reviews: 198,
    price: 45,
    status: "open",
    statusText: "Open Today",
    phone: "(321) 217-1567",
    instagram: "family.barbershop",
    bio: "If you want a logo, a part, or a freehand design in your fade — Kelvo is the artist. Seven years of clean lines and steady hands.",
    photo: "img/kelvo_profile.jpg",
    cuts: [
      "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "rafy",
    calendarUrl: "https://api.leadconnectorhq.com/widget/booking/c2N9iE08nlfTg96bn3oG",
    name: "Rafy",
    specialty: "Texture Specialist",
    featured: true,
    years: 9,
    rating: 4.8,
    reviews: 241,
    price: 40,
    status: "busy",
    statusText: "Next 4:45",
    phone: "(407) 319-7849",
    instagram: "dr.cerquillo",
    bio: "Nine years working with every hair type — curls, waves, coarse, fine. Rafy cuts to your texture, not against it.",
    photo: "img/rafy_profile.jpg",
    cuts: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "jose",
    calendarUrl: "https://api.leadconnectorhq.com/widget/booking/RoNKxA9hOBPZKUrrBGa7",
    name: "Jose",
    specialty: "Classic Cuts Expert",
    featured: true,
    years: 15,
    rating: 5.0,
    reviews: 520,
    price: 50,
    status: "open",
    statusText: "Open Today",
    phone: "(786) 234-6663",
    instagram: "jr_dahalloffamer",
    bio: "Fifteen years in the trade. Jose handles the classics — pompadours, side parts, scissor cuts — like the old-school masters who taught him.",
    photo: "img/jose_profile.jpg",
    cuts: [
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "yamil",
    calendarUrl: "https://api.leadconnectorhq.com/widget/booking/LgjCdxwJFgV6O0Ruo24w",
    name: "Yamil",
    specialty: "Curly & Natural Hair",
    featured: true,
    years: 8,
    rating: 4.9,
    reviews: 267,
    price: 45,
    status: "open",
    statusText: "Open Today",
    phone: "(407) 432-9548",
    instagram: "family.barbershop",
    bio: "Eight years specializing in curly and natural textures. Yamil cuts dry, shapes the curl pattern, and finishes with a sponge twist if you want it.",
    photo: "img/yamil_profile.jpg",
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

/* Render barber tiles — tap a tile to open that barber's profile */
const grid = document.getElementById('barbersGrid');

function masterBadge(){
  return `<span class="b-tile-master"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2l2.6 6.6L22 9.3l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.9L2 9.3l7.4-.7L12 2z"/></svg> Master Barber</span>`;
}

function renderTile(b){
  return `
  <button class="b-tile${b.featured ? ' is-master' : ''}" data-profile="${b.id}" aria-label="View ${b.name}'s profile and book">
    <div class="b-tile-photo">
      <span class="status ${b.status}">${b.statusText}</span>
      ${b.featured ? masterBadge() : ''}
      <img src="${b.photo}" alt="${b.name}, ${b.specialty}" loading="lazy" />
      <div class="b-tile-info">
        <div class="b-tile-id">
          <h3>${b.name}</h3>
          <span class="b-tile-spec">${b.specialty}</span>
        </div>
        <span class="b-tile-rate"><span class="star">★</span>${b.rating.toFixed(1)}</span>
      </div>
    </div>
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
        <span class="bp-eyebrow"><span class="dot"></span> ${b.years} years experience</span>
        <h3 class="bp-name">${b.name}</h3>
        <div class="bp-spec">${b.specialty}</div>
        <div class="bp-stats">
          <div class="bp-stat"><span class="star">★</span><strong>${b.rating.toFixed(1)}</strong><small>${b.reviews} reviews</small></div>
          <span class="bp-sep">·</span>
          <div class="bp-stat bp-price">From<strong>$${b.price}</strong></div>
        </div>
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
  mSpec.textContent = `${b.specialty} · ${b.years} yrs · ★ ${b.rating.toFixed(1)}`;

  if(b.calendarUrl){
    const calId = b.calendarUrl.split('/').pop();
    bookEmbed.innerHTML =
      `<iframe src="${b.calendarUrl}" class="ghl-book-frame" id="${calId}_booking" `
      + `scrolling="no" title="Book with ${b.name}" loading="lazy"></iframe>`;
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
  if(prof){ openProfile(prof.getAttribute('data-profile')); return; }
  const bk = e.target.closest('[data-book]');
  if(bk){
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
