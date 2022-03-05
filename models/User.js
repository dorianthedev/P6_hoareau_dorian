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


// requie pour s'inscrire 
//1 mail et 1 mdp // Minimum length 8
                  // Maximum length 100
                  // Must have uppercase letters
                  // Must have lowercase letters
                  // Must have at least 2 digits
                  // Should not have spaces
                  // Blacklist these values