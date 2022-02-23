//importation de express
const express = require('express');

//importation de moragn (logger http)
const morgan = require('morgan');

//importation fichiers db pour connexion base de donnée mongoDB avec package mongoose
const mongoose = require('./db/db');

// pour créer une application express
const app = express();

// logger les requetes et les reponses
app.use(morgan('dev'));



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