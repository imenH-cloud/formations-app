document.addEventListener('DOMContentLoaded', function() {
    // Validation du formulaire d'ajout de formation
    const addFormationForm = document.querySelector('form[action="/ajouter-formation"]');
    if (addFormationForm) {
      addFormationForm.addEventListener('submit', function(event) {
        const description = addFormationForm.querySelector('textarea[name="description"]').value;
        if (description.length < 100) {
          event.preventDefault();
          alert('La description doit contenir au moins 100 caractères.');
        }
      });
    }
  
    // Validation du formulaire de recherche de formation
    const searchFormationForm = document.querySelector('form[action="/recherche-formation"]');
    if (searchFormationForm) {
      searchFormationForm.addEventListener('submit', function(event) {
        const query = searchFormationForm.querySelector('input[name="query"]').value;
        if (query.trim() === '') {
          event.preventDefault();
          alert('Veuillez entrer un terme de recherche.');
        }
      });
    }
  
    // Amélioration de l'expérience utilisateur pour les boutons de soumission
    const buttons = document.querySelectorAll('button[type="submit"]');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Ne pas désactiver le bouton ni changer son texte
        // button.disabled = true;
        // button.textContent = 'En cours...';
      });
    });
  });
  