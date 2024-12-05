Technologies à utiliser: 
● Node.js 
● Express 
● Handlebars 
● MySQL 
Objectif: 
Créer une application web permettant aux étudiants de suggérer des formations avec les fonctionnalités suivantes : 
1. Une route GET /liste-formations qui affiche la liste des formations suggérées. ○ Chaque formation doit être décrite par : 
■ Le titre de la formation (obligatoire). 
■ Une description détaillée (minimum 100 caractères, obligatoire). 
■ Le nom de l’étudiant qui a suggéré la formation (obligatoire). 
■ La date de suggestion (ajoutée automatiquement lors de 
l’enregistrement). 
2. Une route GET /ajouter-formation qui affiche un formulaire pour suggérer une nouvelle formation. 
3. Une route POST /ajouter-formation pour recevoir les données du formulaire et enregistrer la suggestion dans la base de données. 
4. Une route GET /recherche-formation qui permet de rechercher une formation par titre ou nom de l’étudiant via un champ de recherche. Les résultats doivent afficher les formations correspondantes. 
Base de données: 
● Nom de la base : formations_bdd 
● Nom de la table : suggestions 
● Colonnes obligatoires (au minimum) : 
○ titre : texte, obligatoire. 
○ description : texte, minimum 100 caractères, obligatoire. 
○ etudiant : texte, obligatoire. 
○ date_suggestion : date, ajoutée automatiquement. 
