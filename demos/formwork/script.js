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

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 48);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelector('[data-year]').textContent = new Date().getFullYear();

document.querySelectorAll('.image-frame img').forEach((image) => {
  image.addEventListener('error', () => image.parentElement.classList.add('image-unavailable'));
  if (image.complete && image.naturalWidth === 0) image.parentElement.classList.add('image-unavailable');
});

const form = document.querySelector('[data-enquiry-form]');
const success = document.querySelector('[data-form-success]');
const resetButton = document.querySelector('[data-reset-form]');
const previewButton = document.querySelector('[data-preview-enquiry]');

const previewEnquiry = () => {
  if (!form.reportValidity()) return;
  form.reset();
  form.hidden = true;
  success.hidden = false;
  success.focus();
};

previewButton.addEventListener('click', previewEnquiry);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  previewEnquiry();
});

resetButton.addEventListener('click', () => {
  success.hidden = true;
  form.hidden = false;
  form.querySelector('input').focus();
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
  }, { rootMargin: '0px 0px -5% 0px', threshold: 0.06 });

  reveals.forEach((element) => observer.observe(element));
}
