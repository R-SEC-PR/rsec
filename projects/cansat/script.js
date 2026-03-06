// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) {
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(10, 10, 15, 0.98)';
    navLinks.style.padding = '16px 24px';
    navLinks.style.borderBottom = '1px solid rgba(245, 196, 0, 0.2)';
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      if (window.innerWidth < 900) {
        navLinks.style.display = 'none';
      }
    }
  });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

const animatedElements = [
  '.feature-item',
  '.part-card',
  '.step',
  '.event-card',
  '.skill-card',
  '.tl-item',
  '.about-lead',
  '.contest-about',
  '.cta-qr-item',
];

animatedElements.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 0.08}s`;
    observer.observe(el);
  });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.style.color = '';
    const href = item.getAttribute('href').replace('#', '');
    if (href === current) {
      item.style.color = 'var(--yellow)';
    }
  });
});

// ===== PARALLAX EFFECT ON HERO =====
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroImg = document.querySelector('.hero-img');
  if (heroImg && scrolled < window.innerHeight) {
    heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});
