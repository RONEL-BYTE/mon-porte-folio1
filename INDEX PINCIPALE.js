// Ce fichier peut être utilisé pour ajouter des interactions futures.
// Exemple : animation de défilement ou ouverture de modales.
document.addEventListener('DOMContentLoaded', () => {
    // ── TOGGLE NAV MOBILE ──
    const togglebtn = document.querySelector('.togglebtn')
    const nav = document.querySelector('.navlink')
    togglebtn.addEventListener('click', () => {
        togglebtn.classList.toggle('click')
        nav.classList.toggle('open')
    })

    // ── SCROLL SMOOTH ──
    document.querySelectorAll('nav a').forEach(lien => {
        lien.addEventListener('click', event => {
            const href = lien.getAttribute('href')
            if (href && href.startsWith('#')) {
                event.preventDefault()
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
        
    // ── TYPED.JS ──
    new Typed('.input', {
        strings: ["Ronel Dev", "UX Designer", "Web Developer", "Frontend Developer"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true
    })

    // ── ANIMATIONS GSAP ──
    gsap.from('header', {
        duration: 3.5,
        y: -100,
        opacity: 0,
        ease: 'power2.out'
    })

    gsap.from('.hero-pic', {
        duration: 3,
        x: -100,
        opacity: 0.5,
        ease: 'power2.out',
        delay: 0.1
    })

    gsap.from('.hero-text h5', {
        duration: 0.5,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.5
    })

    gsap.from('.hero-text h1', {
        duration: 2.5,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.7
    })

    gsap.from('.hero-text p', {
        duration: 2.5,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.9
    })

    gsap.from('.btn-group', {
        duration: 2.5,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 1.1
    })

    gsap.from('.social', {
        duration: 2.5,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 1.5
    })
})