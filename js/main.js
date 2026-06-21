// NOVARA MAIN JS — MOTION UPGRADE

document.addEventListener("DOMContentLoaded", () => {
  initPageLoad();
  initNavbar();
  initSmoothScroll();
  initHoverEffects();
  initScrollProgress();
  initRevealAnimations();
});

/* ---------------------------
   PAGE LOAD (CLEAN INTRO)
---------------------------- */
function initPageLoad() {
  document.body.classList.add("is-loading");

  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.remove("is-loading");
      document.body.classList.add("is-loaded");

      // trigger hero animation after load
      animateHero();
    }, 500);
  });
}

/* ---------------------------
   HERO ANIMATION (NEW)
---------------------------- */
function animateHero() {
  const subtitle = document.querySelector(".subtitle");
  const title = document.querySelector(".hero h1");
  const paragraph = document.querySelector(".hero p");
  const buttons = document.querySelector(".hero-buttons");

  if (subtitle) subtitle.style.animation = "fadeUp 0.8s ease forwards";
  if (title) title.style.animation = "fadeUp 1s ease 0.2s forwards";
  if (paragraph) paragraph.style.animation = "fadeUp 1s ease 0.4s forwards";
  if (buttons) buttons.style.animation = "fadeUp 1s ease 0.6s forwards";
}

/* ---------------------------
   NAVBAR BEHAVIOR (REFINED)
---------------------------- */
function initNavbar() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }

    if (currentScrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }

    lastScrollY = currentScrollY;
  });
}

/* ---------------------------
   SMOOTH SCROLL (IMPROVED FEEL)
---------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();

      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    });
  });
}

/* ---------------------------
   SCROLL PROGRESS BAR
---------------------------- */
function initScrollProgress() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + "%";
  });
}

/* ---------------------------
   HOVER EFFECTS (LUXURY FEEL)
---------------------------- */
function initHoverEffects() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hover-active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hover-active");
    });
  });
}

/* ---------------------------
   SCROLL REVEAL (NEW CORE UPGRADE)
---------------------------- */
function initRevealAnimations() {
  const elements = document.querySelectorAll(".card, .section-title");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
