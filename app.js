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
    id: "marcus",
    name: "Marcus Rivera",
    specialty: "Master Barber",
    years: 12,
    rating: 4.9,
    reviews: 287,
    price: 45,
    status: "open",
    statusText: "Open Today",
    bio: "Twelve years on the clippers. Marcus built his reputation on flawless skin fades and a chair-side manner that keeps regulars driving in from three counties.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "jordan",
    name: "Jordan Williams",
    specialty: "Fade Specialist",
    years: 8,
    rating: 5.0,
    reviews: 412,
    price: 40,
    status: "busy",
    statusText: "Next 3:30",
    bio: "Eight years sharpening one craft: the perfect fade. Jordan's chair is the busiest in the shop — for good reason.",
    photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "carlos",
    name: "Carlos Mendez",
    specialty: "Beard & Style Expert",
    years: 10,
    rating: 4.9,
    reviews: 356,
    price: 50,
    status: "open",
    statusText: "Open Today",
    bio: "Ten years and counting. Carlos turns scruff into sculpture — beards, mustaches, and full-face grooming with a straight razor finish.",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "darius",
    name: "Darius Thompson",
    specialty: "Design & Lineup Pro",
    years: 7,
    rating: 4.9,
    reviews: 198,
    price: 45,
    status: "open",
    statusText: "Open Today",
    bio: "If you want a logo, a part, or a freehand design in your fade — Darius is the artist. Seven years of clean lines and steady hands.",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "miguel",
    name: "Miguel Santos",
    specialty: "Texture Specialist",
    years: 9,
    rating: 4.8,
    reviews: 241,
    price: 40,
    status: "busy",
    statusText: "Next 4:45",
    bio: "Nine years working with every hair type — curls, waves, coarse, fine. Miguel cuts to your texture, not against it.",
    photo: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "andre",
    name: "Andre Johnson",
    specialty: "Classic Cuts Expert",
    years: 15,
    rating: 5.0,
    reviews: 520,
    price: 50,
    status: "open",
    statusText: "Open Today",
    bio: "Fifteen years in the trade. Andre handles the classics — pompadours, side parts, scissor cuts — like the old-school masters who taught him.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "kevin",
    name: "Kevin Torres",
    specialty: "Kids & Family Cuts",
    years: 6,
    rating: 4.9,
    reviews: 312,
    price: 25,
    status: "open",
    statusText: "Open Today",
    bio: "Six years and a magic touch with kids. Patient, fun, and quick — Kevin makes the first haircut a tradition, not a fight.",
    photo: "https://images.unsplash.com/photo-1507081323647-4d250478b919?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "isaiah",
    name: "Isaiah Brown",
    specialty: "Curly & Natural Hair",
    years: 8,
    rating: 4.9,
    reviews: 267,
    price: 45,
    status: "open",
    statusText: "Open Today",
    bio: "Eight years specializing in curly and natural textures. Isaiah cuts dry, shapes the curl pattern, and finishes with a sponge twist if you want it.",
    photo: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "luis",
    name: "Luis Perez",
    specialty: "Low Fade Specialist",
    years: 11,
    rating: 4.9,
    reviews: 389,
    price: 45,
    status: "busy",
    statusText: "Next 5:15",
    bio: "Eleven years dialing in the low fade — the cleanest blend in the shop. Luis's regulars book a month out, so don't sleep on it.",
    photo: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "diego",
    name: "Diego Ramirez",
    specialty: "Senior Master Barber",
    years: 18,
    rating: 5.0,
    reviews: 642,
    price: 55,
    status: "open",
    statusText: "Open Today",
    bio: "Eighteen years. The barber other barbers come to. Diego mentors the team and still runs his own chair five days a week.",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=900&q=85",
    cuts: [
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

/* Render barber cards */
const grid = document.getElementById('barbersGrid');

function renderFeatured(b){
  return `
  <article class="barber-card featured">
    <span class="featured-ribbon">
      <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 2l2.6 6.6L22 9.3l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.9L2 9.3l7.4-.7L12 2z"/></svg>
      Maestro del Equipo
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

/* ============ NAV SCROLL ============ */
window.addEventListener('scroll', () => {
  const n = document.getElementById('nav');
  if(window.scrollY > 40){ n.classList.add('scrolled'); }
  else { n.classList.remove('scrolled'); }
});
