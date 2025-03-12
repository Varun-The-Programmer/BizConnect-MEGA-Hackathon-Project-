document.addEventListener("DOMContentLoaded", function () {
    // Button Click Alerts
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Feature coming soon! Thanks for your interest.");
        });
    });


    // Navigation Link Alerts (Prevent Default and Show Alert)
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior (page reload)
            alert(`${link.textContent} section is under development.`);
        });
    });


    // Hero Button Smooth Scroll (Example - replace with your target section)
    const heroButton = document.querySelector(".hero-button");
    if (heroButton) {
        heroButton.addEventListener("click", () => {
            const featuresSection = document.querySelector(".features-section");
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }


    // Vision Button Smooth Scroll (Example - replace with your target section)
    const visionButton = document.querySelector(".vision-button");
    if (visionButton) {
        visionButton.addEventListener("click", () => {
            const visionSection = document.querySelector(".vision-section");
            if (visionSection) {
                visionSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }


    // CTA Button Smooth Scroll (Example - replace with your target section)
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            const footerSection = document.querySelector("footer");
            if (footerSection) {
                footerSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }


    // Add more interactive features here as needed
});
