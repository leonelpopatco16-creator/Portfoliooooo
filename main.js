// Data
const skills = [
  'HTML', 'CSS', 'JavaScript', 'Git', 'Responsive Design', 'Problem Solving'
];

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A modern, responsive e-portfolio built with HTML, CSS, and JS.',
    image: 'assets/placeholders/project-1.jpg',
    links: [
      { label: 'View', href: '#projects' }
    ]
  },
  {
    title: 'Landing Page',
    desc: 'Clean landing page template focusing on accessibility and speed.',
    image: 'assets/placeholders/project-2.jpg',
    links: [
      { label: 'View', href: '#projects' }
    ]
  },
  {
    title: 'UI Components',
    desc: 'Reusable card, button, and layout components in vanilla CSS.',
    image: 'assets/placeholders/project-3.jpg',
    links: [
      { label: 'View', href: '#projects' }
    ]
  }
];

// Add your certificate image paths here (relative to index.html)
const certificates = [
  // Example: 'assets/certificates/cert-1.jpg',
];

// Helpers
function el(tag, className, children) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (children) {
    for (const c of [].concat(children)) e.append(c);
  }
  return e;
}

// Render Skills
(function renderSkills() {
  const list = document.getElementById('skillsList');
  if (!list) return;
  list.innerHTML = '';
  skills.forEach(s => list.append(el('span', 'skill-pill', s)));
})();

// Render Projects
(function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = el('article', 'card');
    const img = el('img');
    img.src = p.image;
    img.alt = `${p.title} preview`;

    const body = el('div', 'card-body');
    const title = el('h3', 'card-title', p.title);
    const desc = el('p', 'card-desc', p.desc);

    const actions = el('div', 'card-actions');
    p.links?.forEach(l => {
      const a = el('a', 'btn ghost', l.label);
      a.href = l.href;
      a.target = l.href.startsWith('http') ? '_blank' : '_self';
      a.rel = 'noopener';
      actions.append(a);
    });

    body.append(title, desc, actions);
    card.append(img, body);
    grid.append(card);
  });
})();

// Render Certificates
(function renderCerts() {
  const grid = document.getElementById('certsGrid');
  const meta = document.getElementById('certCount');
  if (!grid || !meta) return;
  grid.innerHTML = '';

  certificates.forEach(src => {
    const wrap = el('div', 'cert');
    const img = el('img');
    img.src = src;
    img.alt = 'Certificate';
    wrap.append(img);
    grid.append(wrap);
  });

  meta.innerHTML = `Found ${certificates.length} certificate image(s) in <code>assets/certificates</code>.`;
})();

// Current year
(function year() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Mobile Nav Toggle
(function navToggle() {
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('show');
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close after clicking a link (mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && nav.classList.contains('show')) {
      nav.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Smooth scroll
(function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
