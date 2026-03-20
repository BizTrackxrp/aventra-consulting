// Navigation toggle and scroll effects for Aventra Consulting website

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Create overlay element for closing sidebar when tapping outside
  const overlay = document.createElement('div');
  overlay.classList.add('nav-overlay');
  document.body.appendChild(overlay);

  // Create close button inside the sidebar
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('nav-close');
  closeBtn.setAttribute('aria-label', 'Close navigation');
  closeBtn.innerHTML = '&times;';
  if (navLinks) navLinks.prepend(closeBtn);

  function openNav() {
    navLinks.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', openNav);
  }

  closeBtn.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);

  // Close nav when a link is tapped
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Add blur effect to navbar when scrolling
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
});
