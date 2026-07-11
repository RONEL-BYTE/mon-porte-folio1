// Ce fichier peut être utilisé pour ajouter des interactions futures.
// Exemple : animation de défilement ou ouverture de modales.

document.addEventListener('DOMContentLoaded', () => {
  const liens = document.querySelectorAll('nav a');
  const href = lien.getAttribute('href');
  liens.forEach(lien => {
    const href = lien.getAttribute('href');
    lien.addEventListener('click', event => {
      event.preventDefault();
      const cible = document.querySelector(lien.getAttribute('href'));
        if (href && href.startsWith('#')) {
    event.preventDefault();
    // Votre code pour le défilement fluide ici
}
      if (cible) {
        cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (href && href.startsWith('#')) {
    event.preventDefault();
    // Votre code pour le défilement fluide ici
}
    });
  });
});
 //Animation d'entrée pour le titre principal
 
gsap.from("h1", {
  duration:3 ,
  y: -50 ,
  opacity :0
});

gsap.from("h2", {
           duration:3,
           y: -50 ,
           opacity :0,
           delay: 1
});

gsap.from(".btn",{
  duration:3 ,
  scale:0 ,
  opacity:0,
  deplay:1
});

gsap.from(".carte-projet",{
  duration:0.8,
  y:50,
  opacity:100,
  opacity:0,
  stagger:0.2,
  delay:0.5
});
gsap.from('.profile-img', { 
    duration: 1.5, 
    x: 50, 
    opacity: 0, 
    ease: 'power2.out', 
    delay: 0.5 
});