//importation de express
const express = require('express');

//importation de moragn (logger http)
const morgan = require('morgan');
// logger les requetes et les reponses
app.use(morgan('dev'));

//importation fichiers db pour connexion base de donnée mongoDB avec package mongoose
const mongoose = require('./db/db');

// pour créer une application express
const app = express();

// gérer les problèmes de CORS ( cross-origin request sharing ) = sécurity
// autorisation à tout le monde d'accès à la web api, pas de rejet
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // d'envoyer des requêtes avec les méthodes mentionnées
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// test si le server réponds
app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});
app.use((req, res, next) => {
  res.status(201);
  next();
});
app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});
app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

// exportation de app.js pour y accéder depuis un autre fichier
module.exports = app;