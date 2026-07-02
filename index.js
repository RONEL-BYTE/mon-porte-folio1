// Ce fichier peut être utilisé pour ajouter des interactions futures.
// Exemple : animation de défilement ou ouverture de modales.

document.addEventListener('DOMContentLoaded', () => {
  const liens = document.querySelectorAll('nav a');
  liens.forEach(lien => {
    lien.addEventListener('click', event => {
      event.preventDefault();
      const cible = document.querySelector(lien.getAttribute('href'));
      if (cible) {
        cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
