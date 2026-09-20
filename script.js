document.addEventListener('DOMContentLoaded', () => {
    
    // --- Journey Start Logic ---
    const startBtn = document.getElementById('start-btn');
    const heroSection = document.getElementById('hero');
    const storySection = document.getElementById('story');

    startBtn.addEventListener('click', () => {
        heroSection.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        heroSection.style.opacity = 0;
        heroSection.style.transform = "translateY(-30px)";
        
        setTimeout(() => {
            heroSection.style.display = 'none';
            storySection.classList.remove('hidden');
            storySection.classList.add('visible');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(checkReveal, 100);
        }, 800);
    });

    // --- Flip Card ---
    const centerCard = document.getElementById('centerCard');
    if (centerCard) {
        centerCard.addEventListener('click', () => {
            centerCard.classList.toggle('flipped');
        });
    }

    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.9;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
});
