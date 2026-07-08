const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('open');

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

function openMenu() {
  navLinks.classList.add('open');
  overlay.classList.add('active');
  hamburgerIcon.src = 'images/icon-close.svg';
  hamburger.setAttribute('aria-label', 'Close menu');
}

function closeMenu() {
  navLinks.classList.remove('open');
  overlay.classList.remove('active');
  hamburgerIcon.src = 'images/icon-menu.svg';
  hamburger.setAttribute('aria-label', 'Open menu');
}

overlay.addEventListener('click', () => {
  closeMenu();
});

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    const parentLi = toggle.closest('.dropdown');
    const isActive = parentLi.classList.contains('active');

    closeAllDropdowns();

    if (!isActive) {
      parentLi.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});

function closeAllDropdowns() {
  dropdownToggles.forEach((toggle) => {
    const parentLi = toggle.closest('.dropdown');
    parentLi.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  });
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    closeAllDropdowns();
  }
});

const heroImg = document.getElementById('hero-img');

function updateHeroImage() {
  if (window.innerWidth <= 768) {
    heroImg.src = 'images/image-hero-mobile.png';
  } else {
    heroImg.src = 'images/image-hero-desktop.png';
  }
}

updateHeroImage();
window.addEventListener('resize', updateHeroImage);