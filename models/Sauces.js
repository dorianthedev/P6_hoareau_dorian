// importation de mongoose
const mongoose = require('mongoose');

// shema donné sauce de l'utilisateur
const saucesSchema  = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true},
    description: { type: String, required: true },
    mainPepper: { type: String, required: true},
    heat: { type: Number, required: true},

});

// exportation du modeles
module.exports = mongoose.model("sauces", saucesSchema); 