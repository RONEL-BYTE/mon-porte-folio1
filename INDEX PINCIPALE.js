document.addEventListener('DOMContentLoaded', () => {
    const togglebtn = document.querySelector('.togglebtn')
    const nav = document.querySelector('.navlink')
    const overlay = document.querySelector('.nav-overlay')

    const closeMenu = () => {
        togglebtn?.classList.remove('click')
        nav?.classList.remove('open')
        overlay?.classList.remove('active')
        document.body.classList.remove('menu-open')
        togglebtn?.setAttribute('aria-expanded', 'false')
    }

    const openMenu = () => {
        togglebtn?.classList.add('click')
        nav?.classList.add('open')
        overlay?.classList.add('active')
        document.body.classList.add('menu-open')
        togglebtn?.setAttribute('aria-expanded', 'true')
    }

    const toggleMenu = () => {
        if (nav?.classList.contains('open')) {
            closeMenu()
        } else {
            openMenu()
        }
    }

    togglebtn?.addEventListener('click', toggleMenu)
    overlay?.addEventListener('click', closeMenu)

    togglebtn?.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            toggleMenu()
        }
    })

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMenu()
    })

    document.querySelectorAll('nav a').forEach(lien => {
        lien.addEventListener('click', event => {
            closeMenu()
            const href = lien.getAttribute('href')
            if (href?.startsWith('#')) {
                event.preventDefault()
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })

    const typedEl = document.querySelector('.input')
    if (typedEl && typeof Typed !== 'undefined') {
        new Typed('.input', {
            strings: ['Ronel Dev', 'UX Designer', 'Web Developer', 'Frontend Developer'],
            typeSpeed: 70,
            backSpeed: 55,
            loop: true
        })
    }

    if (typeof gsap !== 'undefined') {
        const mm = gsap.matchMedia()

        mm.add('(min-width: 931px)', () => {
            gsap.from('header', { duration: 2, y: -100, opacity: 0, ease: 'power2.out' })
            gsap.from('.hero-pic', { duration: 2, x: -100, opacity: 0, ease: 'power2.out', delay: 0.1 })
            gsap.from('.hero-text h5', { duration: 0.5, y: 30, opacity: 0, ease: 'power2.out', delay: 0.5 })
            gsap.from('.hero-text h1', { duration: 2.5, y: 30, opacity: 0, ease: 'power2.out', delay: 0.7 })
            gsap.from('.hero-text p', { duration: 2.5, y: 30, opacity: 0, ease: 'power2.out', delay: 0.9 })
            gsap.from('.btn-group', { duration: 2.5, y: 30, opacity: 0, ease: 'power2.out', delay: 1.1 })
            gsap.from('.social', { duration: 2.5, y: 30, opacity: 0, ease: 'power2.out', delay: 1.5 })
        })

        mm.add('(max-width: 930px)', () => {
            const mobileAnim = { ease: 'power2.out', clearProps: 'transform' }

            gsap.from('header', { duration: 1.5, y: -50, opacity: 0, ...mobileAnim })
            gsap.from('.hero-pic', { duration: 1.5, y: -30, opacity: 0, delay: 0.1, ...mobileAnim })
            gsap.from('.hero-text h5', { duration: 0.5, y: 15, opacity: 0, delay: 0.3, ...mobileAnim })
            gsap.from('.hero-text h1', { duration: 1.5, y: 15, opacity: 0, delay: 0.5, ...mobileAnim })
            gsap.from('.hero-text p', { duration: 1.5, y: 15, opacity: 0, delay: 0.7, ...mobileAnim })
            gsap.from('.btn-group', { duration: 1.5, y: 15, opacity: 0, delay: 0.9, ...mobileAnim })
            gsap.from('.social', { duration: 1.5, y: 15, opacity: 0, delay: 1.1, ...mobileAnim })
        })
    }
})
