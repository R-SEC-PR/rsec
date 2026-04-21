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
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(10, 10, 15, 0.98)';
  navLinks.style.padding = '16px 24px';
  navLinks.style.borderBottom = '1px solid rgba(245, 196, 0, 0.2)';
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
      // Close mobile menu if open
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

// Add fade-in class to elements
const animatedElements = [
  '.feature-item',
  '.part-card',
  '.step',
  '.event-card',
  '.skill-card',
  '.tl-item',
  '.about-lead',
  '.contest-about',
  '.license-card',
  '.sequence-img-wrap'
];

animatedElements.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 0.08}s`;
    observer.observe(el);
  });
});

// ===== COUNTER ANIMATION FOR HERO STATS =====
function animateCounter(element, target, suffix, duration = 1500) {
  const start = 0;
  const startTime = performance.now();
  
  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };
  
  requestAnimationFrame(update);
}

// Trigger counter when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroSection = document.getElementById('hero');
if (heroSection) {
  heroObserver.observe(heroSection);
}

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
