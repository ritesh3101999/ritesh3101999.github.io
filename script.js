document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links that point to a section on the page
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent standard jump
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smoothly scroll down, compensating for the fixed navbar height
                window.scrollTo({
                    top: targetElement.offsetTop - 75, 
                    behavior: 'smooth'
                });
            }
        });
    });
});