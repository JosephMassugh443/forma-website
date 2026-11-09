const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const dialog = document.querySelector('.booking-dialog');
const bookingForm = document.querySelector('[data-booking-form]');
const bookingSuccess = document.querySelector('.booking-success');

menuButton.addEventListener('click', () => {
  const open = body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.querySelector('.menu-label').textContent = 'Menu';
  }
});

document.querySelectorAll('[data-book]').forEach((button) => {
  button.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    bookingForm.hidden = false;
    bookingSuccess.hidden = true;
    dialog.showModal();
  });
});

document.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', () => dialog.close());
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  bookingForm.hidden = true;
  bookingSuccess.hidden = false;
  bookingSuccess.querySelector('button').focus();
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

document.querySelectorAll('.image-wrap img').forEach((image) => {
  image.addEventListener('error', () => {
    image.hidden = true;
    image.parentElement.classList.add('image-unavailable');
  });
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
