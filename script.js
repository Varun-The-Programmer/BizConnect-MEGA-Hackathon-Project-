document.addEventListener("DOMContentLoaded", function () {
    // Navigation Link Alerts (Prevent Default and Show Alert)
    //const navLinks = document.querySelectorAll(".nav-links a");
    //navLinks.forEach(link => {
    //    link.addEventListener("click", (e) => {
    //        e.preventDefault(); // Prevent default link behavior (page reload)
    //        alert(`${link.textContent} section is under development.`);
    //    });
    //});


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
    //const visionButton = document.querySelector(".vision-button");
    //if (visionButton) {
    //    visionButton.addEventListener("click", () => {
    //        const visionSection = document.querySelector(".vision-section");
    //        if (visionSection) {
    //            visionSection.scrollIntoView({ behavior: "smooth" });
    //        }
    //    });
    //}


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


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    }
    
    
    const connectButtons = document.querySelectorAll('.connectButton'); 
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');
    
    connectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});


