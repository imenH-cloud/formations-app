const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const formationController = require('./controllers/formationController');
const path = require('path');

const app = express();
const port = 3000;

// Configuration de Handlebars
app.engine('handlebars', exphbs.engine({
  extname: '.handlebars',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.redirect('/liste-formations');
});

app.get('/liste-formations', formationController.getFormations);
app.get('/ajouter-formation', formationController.showAddFormation);
app.post('/ajouter-formation', formationController.addFormation);
app.get('/recherche-formation', formationController.showSearchFormation);
app.post('/recherche-formation', formationController.searchFormation);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
