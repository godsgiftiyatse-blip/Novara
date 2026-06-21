
/* ==========================================
   NOVARA
   Main JavaScript
========================================== */

// Scroll Progress Bar
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});

// Sticky Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
        header.style.transition = ".3s";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});

// Scroll Reveal
const reveals = document.querySelectorAll(".fade");

function revealSections() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Highlight Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Image Fade-In
const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "scale(1)";

        }

    });

});

images.forEach(image => {

    image.style.opacity = "0";
    image.style.transform = "scale(.95)";
    image.style.transition = "all .8s ease";

    imageObserver.observe(image);

});

// Button Hover Effect
document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

console.log("NOVARA Loaded Successfully");
