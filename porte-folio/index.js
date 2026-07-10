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
  duration:1 ,
  y: -50 ,
  opacity :0
});