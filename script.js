document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       1. AUTOMATIC COPYRIGHT YEAR
    ======================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* ========================================
       2. MOBILE NAVIGATION
    ======================================== */

    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenuButton && navLinks) {

        mobileMenuButton.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");

            mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
            mobileMenuButton.textContent = isOpen ? "✕" : "☰";
            mobileMenuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Toggle navigation"
            );
        });

        // Close the menu when a navigation link is clicked.
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");

                mobileMenuButton.setAttribute("aria-expanded", "false");
                mobileMenuButton.textContent = "☰";
                mobileMenuButton.setAttribute("aria-label", "Toggle navigation");
            });
        });

        // Close the menu when the user clicks outside it.
        document.addEventListener("click", event => {
            const clickedInsideMenu = navLinks.contains(event.target);
            const clickedButton = mobileMenuButton.contains(event.target);

            if (!clickedInsideMenu && !clickedButton) {
                navLinks.classList.remove("active");

                mobileMenuButton.setAttribute("aria-expanded", "false");
                mobileMenuButton.textContent = "☰";
                mobileMenuButton.setAttribute("aria-label", "Toggle navigation");
            }
        });

        // Close the mobile menu if the window becomes desktop-sized.
        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                navLinks.classList.remove("active");

                mobileMenuButton.setAttribute("aria-expanded", "false");
                mobileMenuButton.textContent = "☰";
                mobileMenuButton.setAttribute("aria-label", "Toggle navigation");
            }
        });
    }


    /* ========================================
       3. SMOOTH SCROLLING
    ======================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            // Ignore empty links and the page-top placeholder.
            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches ? "auto" : "smooth",
                    block: "start"
                });
            }
        });
    });


    /* ========================================
       4. PROFILE CARD HOVER EFFECT
    ======================================== */

    const profileCard = document.querySelector(".hero-profile-card");

    if (profileCard) {

        profileCard.addEventListener("mouseenter", () => {
            profileCard.classList.add("card-hovered");
        });

        profileCard.addEventListener("mouseleave", () => {
            profileCard.classList.remove("card-hovered");
        });
    }


    /* ========================================
       5. BUTTON FEEDBACK
    ======================================== */

    document.querySelectorAll(".primary-button, .secondary-button").forEach(button => {

        button.addEventListener("click", () => {

            // Briefly indicate that the button was clicked.
            button.classList.add("button-clicked");

            window.setTimeout(() => {
                button.classList.remove("button-clicked");
            }, 180);
        });
    });


    /* ========================================
       6. CONSOLE MESSAGE
    ======================================== */

    console.log(
        "%cCardly",
        "font-size: 28px; font-weight: bold; color: #a78bfa;"
    );

    console.log(
        "%cYour identity. Your style.",
        "font-size: 13px; color: #c4b5fd;"
    );

});
