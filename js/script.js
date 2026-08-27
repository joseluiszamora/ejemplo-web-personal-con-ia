// ==========================================================================
// MENÚ MÓVIL
// ==========================================================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cierra el menú al hacer clic en un enlace (útil en mobile)
  navMenu.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================================
// HEADER CON SOMBRA AL HACER SCROLL
// ==========================================================================
const header = document.getElementById('header');

const updateHeaderShadow = () => {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 8
    ? '0 8px 24px rgba(0, 0, 0, 0.25)'
    : 'none';
};

window.addEventListener('scroll', updateHeaderShadow, { passive: true });
updateHeaderShadow();

// ==========================================================================
// RESALTAR ENLACE DE NAVEGACIÓN SEGÚN LA SECCIÓN VISIBLE
// ==========================================================================
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const highlightActiveLink = () => {
  let currentId = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', highlightActiveLink, { passive: true });
highlightActiveLink();

// ==========================================================================
// AÑO ACTUAL EN EL FOOTER
// ==========================================================================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
