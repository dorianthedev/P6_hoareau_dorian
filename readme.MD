1. Clonez le repository
3. Exécutez npm install à partir du répertoire du projet
4. Exécutez nodemon server pour démarrer le backend
5. Exécutez le back-end sur http://localhost:3000 seulement


# backend
Pour lancer le server = nodemon server

# Front error
Si une error s'affiche dès le lancement veuillez relancer le front et le server

# exeplication fichier .env.example
supprimer le .example
et remplir les données par les données propre à votre base de donnée mongoDB Atlas

# Routes
## Pour créer un compte POST: 
http://localhost:3000/api/auth/signup

## Pour se connecter POST: 
http://localhost:3000/api/auth/login

## GET Pour l'ajout de sauces
http://localhost:3000/api/sauces/

## Route GET pour afficher toute les sauces
http://localhost:3000/api/sauces/

## Route GET pour afficher UNE sauce
http://localhost:3000/api/sauces/:id

## Route PUT pour modifier un objet qui a été sélectionné par son _id
http://localhost:3000/api/sauces/:id

## Route POST like
http://localhost:3000/api/sauces/:id/like
