// NOVARA MAIN JS (UPDATED FOR YOUR HTML STRUCTURE)

document.addEventListener("DOMContentLoaded", () => {
  initPageLoad();
  initNavbar();
  initSmoothScroll();
  initHoverEffects();
  initScrollProgress();
});

/* ---------------------------
   PAGE LOAD
---------------------------- */
function initPageLoad() {
  document.body.classList.add("is-loading");

  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.remove("is-loading");
      document.body.classList.add("is-loaded");
    }, 500);
  });
}

/* ---------------------------
   NAVBAR (FIXED SELECTOR)
---------------------------- */
function initNavbar() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // hide on scroll down
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }

    // blur / background effect
    if (currentScrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }

    lastScrollY = currentScrollY;
  });
}

/* ---------------------------
   SMOOTH SCROLL
---------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();

      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    });
  });
}

/* ---------------------------
   SCROLL PROGRESS BAR (NEW)
---------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById("progress-bar");

  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";
  });
}

/* ---------------------------
   HOVER EFFECTS (SAFE VERSION)
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
