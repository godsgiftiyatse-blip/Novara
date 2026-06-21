// NOVARA MAIN JS
// Premium foundation script for interactions + UI behavior

document.addEventListener("DOMContentLoaded", () => {
  initPageLoad();
  initNavbar();
  initSmoothScroll();
  initHoverEffects();
});

/* ---------------------------
   PAGE LOAD EXPERIENCE
---------------------------- */
function initPageLoad() {
  const body = document.body;

  // simple preload class system (we'll upgrade later with real loader)
  body.classList.add("is-loading");

  window.addEventListener("load", () => {
    setTimeout(() => {
      body.classList.remove("is-loading");
      body.classList.add("is-loaded");
    }, 600);
  });
}

/* ---------------------------
   NAVBAR BEHAVIOR
---------------------------- */
function initNavbar() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // subtle hide/show on scroll (premium feel)
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }

    // background blur effect on scroll
    if (currentScrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }

    lastScrollY = currentScrollY;
  });
}

/* ---------------------------
   SMOOTH SCROLL (CUSTOM)
   Lightweight version (no library)
---------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      e.preventDefault();

      window.scrollTo({
        top: targetEl.offsetTop - 60,
        behavior: "smooth"
      });
    });
  });
}

/* ---------------------------
   HOVER EFFECTS FOUNDATION
   (for luxury micro-interactions later)
---------------------------- */
function initHoverEffects() {
  const hoverItems = document.querySelectorAll(".hover-item");

  hoverItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("is-hovered");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("is-hovered");
    });
  });
}

/* ---------------------------
   FUTURE MODULE PLACEHOLDERS
   (we will expand later)
---------------------------- */

// Cursor system (luxury custom cursor later)
function initCustomCursor() {
  // reserved for GSAP / advanced UX later
}

// Scroll animations system
function initScrollAnimations() {
  // reserved for intersection observer / GSAP later
}
