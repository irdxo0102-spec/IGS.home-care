// =========================
// IGS HOME CARE - SCRIPT
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MOBILE MENU
    // =========================

    const menu = document.querySelector(".menu");
    const navLinks = document.getElementById("navLinks");

    if (menu && navLinks) {

        menu.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Menu-এর কোনো লিংকে চাপলে menu বন্ধ হবে
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });

        });
    }


    // =========================
    // CURRENT YEAR
    // =========================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =========================
    // SMOOTH SCROLL
    // =========================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const header = document.querySelector("header");

                const headerHeight =
                    header ? header.offsetHeight : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    // =========================
    // COMPLETED WORKS ANIMATION
    // =========================

    const workCards =
        document.querySelectorAll(".work-card");

    if (
        "IntersectionObserver" in window &&
        workCards.length > 0
    ) {

        const observer =
            new IntersectionObserver(function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            }, {
                threshold: 0.15
            });


        workCards.forEach(function (card) {

            observer.observe(card);

        });

    }

});
