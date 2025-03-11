document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
        alert('Welcome to Business Connect! Let’s build something great together.');
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`${link.textContent} page coming soon!`);
        });
    });
});
