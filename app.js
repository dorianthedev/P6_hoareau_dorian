//importation de express
const express = require('express');

//importation de moragn (logger http)
const morgan = require('morgan');


//importation fichiers db pour connexion base de donnée mongoDB avec package mongoose
const mongoose = require('./db/db');

// pour créer une application express
const app = express();

//importation de body-parser
const bodyParser = require('body-parser')

// logger les requetes et les reponses
app.use(morgan('dev'));



// gérer les problèmes de CORS ( cross-origin request sharing ) = sécurity
// autorisation à tout le monde d'accès à la web api, pas de rejet
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // d'envoyer des requêtes avec les méthodes mentionnées
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//transformer le corps (body) en json objet javascript réutilisables
app.use(bodyParser.json())


// La route authentification (auth)
// api/auth = uri = route générale
app.use ('/api/auth', la suite dans la route)


// exportation de app.js pour y accéder depuis un autre fichier
module.exports = app;