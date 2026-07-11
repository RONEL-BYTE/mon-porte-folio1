document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(lien => {
        lien.addEventListener('click', event => {
            const href = lien.getAttribute('href')
            if (href?.startsWith('#')) {
                event.preventDefault()
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        })
    })

    if (typeof gsap === 'undefined') return

    gsap.from('h1', {
        duration: 1.2,
        y: -50,
        opacity: 0,
        ease: 'power2.out'
    })

    gsap.from('h2', {
        duration: 1.2,
        y: -50,
        opacity: 0,
        delay: 0.3,
        ease: 'power2.out'
    })

    gsap.from('.btn', {
        duration: 1,
        scale: 0,
        opacity: 0,
        delay: 0.6,
        ease: 'back.out(1.7)'
    })

    gsap.from('.carte-projet', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5,
        ease: 'power2.out'
    })

    gsap.from('.competence', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.15,
        delay: 0.8,
        ease: 'power2.out'
    })
})
