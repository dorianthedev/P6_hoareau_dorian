# backend
Pour lancer le server = nodemon server

# exeplication fichier .env.example
supprimer le .example
et remplir les données par les données propre à votre base de donnée mongoDB Atlas

# Routes
## Pour créer un compte POST: 
http://localhost:3000/api/auth/signup

## Pour se connecter POST: 
http://localhost:3000/api/auth/login

## GET Pour l'ajout de sauces
http://localhost:3000/api/sauces/creationsauces

## Route GET pour afficher toute les sauces
http://localhost:3000/api/sauces/


## Route GET pour afficher UNE sauce
http://localhost:3000/api/sauces/:id

## Route PUT pour modifier un objet qui a été sélectionné par son _id
http://localhost:3000/api/sauces/:id
