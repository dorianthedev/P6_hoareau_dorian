// importation de mongoose
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// le modele de base pour signup pour enregistrer un nouvel utilisateur dans la base de donnée
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

//sécurité  conseillé pour ne pas avoir 2 fois la meme adresse mail
userSchema.plugin(uniqueValidator);

// exportation du model
module.exports = mongoose.model('User', userSchema);