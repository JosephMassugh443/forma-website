const body = document.body;
const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const menuLabel = document.querySelector('[data-menu-label]');
const nav = document.querySelector('.site-nav');

const closeMenu = () => {
  body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuLabel.textContent = 'Menu';
};

menuButton.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuLabel.textContent = isOpen ? 'Close' : 'Menu';
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelector('[data-year]').textContent = new Date().getFullYear();

document.querySelectorAll('.image-frame img').forEach((image) => {
  image.addEventListener('error', () => image.parentElement.classList.add('image-unavailable'));
});

const reveals = document.querySelectorAll('[data-reveal]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -5% 0px', threshold: 0.05 });

  reveals.forEach((element) => observer.observe(element));
}
