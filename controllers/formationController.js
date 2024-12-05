const db = require('../models/db');

// Fonction pour obtenir la liste des formations
exports.getFormations = (req, res) => {
  db.query('SELECT * FROM suggestions', (err, results) => {
    if (err) throw err;
    res.render('liste-formations', { suggestions: results });
  });
};

// Fonction pour afficher le formulaire d'ajout de formation
exports.showAddFormation = (req, res) => {
  res.render('ajouter-formation');
};

// Fonction pour ajouter une nouvelle formation
exports.addFormation = (req, res) => {
  const { titre, description, etudiant } = req.body;

  // Validation de la longueur de la description
  if (description.length < 100) {
    return res.status(400).send('La description doit contenir au moins 100 caractères.');
  }

  db.query('INSERT INTO suggestions (titre, description, etudiant) VALUES (?, ?, ?)', [titre, description, etudiant], (err, result) => {
    if (err) throw err;
    res.redirect('/liste-formations');
  });
};

// Fonction pour afficher le formulaire de recherche de formation
exports.showSearchFormation = (req, res) => {
  res.render('recherche-formation');
};

// Fonction pour rechercher une formation
exports.searchFormation = (req, res) => {
  const { query } = req.body;
  db.query('SELECT * FROM suggestions WHERE titre LIKE ? OR etudiant LIKE ?', [`%${query}%`, `%${query}%`], (err, results) => {
    if (err) throw err;
    res.render('liste-formations', { suggestions: results });
  });
};
