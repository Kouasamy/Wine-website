
TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".search", 1, {
    opacity: 0,
    delay: .5,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".menu", 1, {
    opacity: 0,
    delay: .6,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".title", 1, {
    opacity: 0,
    delay: 1,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".btn", 1, {
    opacity: 0,
    delay: 1.6,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".line-one", 1, {
    opacity: 0,
    delay: 2,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".line-two", 1, {
    opacity: 0,
    delay: 2.5,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".img", 2, {
    opacity: 0,
    delay: 2.9,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".year", 1, {
    opacity: 0,
    delay: 1.4,
    y: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 2, {
    opacity: 0,
    delay: 3.2,
    y: 40,
    ease: Expo.easeInOut
}, 0.2)

//animation apparition des images 
window.addEventListener('load', () => {
    const images = document.querySelectorAll('.gallery-item img');
    
    images.forEach((image, index) => {
        gsap.fromTo(image, 
            { opacity: 0, y: 100 }, // Départ de l'animation 
            { 
                opacity: 1, 
                y: 0,       
                delay: index * 0.2, // Retarder l'animation de chaque image beaucoup plus en cascade
                duration: 1.5, 
                ease: 'power3.out' // Facilité de l'animation
            }
        );
    });
});

//animation du menu burger 
const burgerMenu = document.getElementById('burger-menu');
    const menuModal = document.getElementById('burger-menu-modal');
    const closeMenu = document.getElementById('close-menu');
    
    // Ouvrir le menu
    burgerMenu.addEventListener('click', () => {
        menuModal.classList.remove('hidden');
    });

    // Fermer le menu
    closeMenu.addEventListener('click', () => {
        menuModal.classList.add('hidden');
    });