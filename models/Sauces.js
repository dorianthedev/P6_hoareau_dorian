// importation de mongoose
const mongoose = require('mongoose');

// shema donné sauce de l'utilisateur
const saucesSchema  = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true},
    description: { type: String, required: true },
    mainPepper: { type: String, required: true},
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true},
    likes: { type: Number, default: 0},
    dislikes: { type: Number,  default: 0},
    usersLiked: { type: [String]},
    usersDisliked: { type: [String]}
    

});

// exportation du modeles
module.exports = mongoose.model("sauces", saucesSchema); 