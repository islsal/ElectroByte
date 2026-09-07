/* ============================================
   ElectroByte
   script.js
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------
       HEADER
    ------------------------------- */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    });

    /* -------------------------------
       SMOOTH MENU
    ------------------------------- */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    /* -------------------------------
       FADE UP
    ------------------------------- */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

});

const routeButton = document.getElementById("routeButton");
const routeModal = document.getElementById("routeModal");

routeButton.addEventListener("click", () => {

    routeModal.classList.add("active");

});

routeModal.addEventListener("click", (e) => {

    if(e.target === routeModal){

        routeModal.classList.remove("active");

    }

});