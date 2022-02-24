// importation du models de la base de donnée User.js
const User = require('../models/User')
console.log(User);

//signup pour enregistrer un noucel user dans la base de donnée
// exports pour exporter dnas la routes/user.js
exports.signup = (req, res, next) => {
    console.log("contenu");
    console.log(req.body);
    next()
};

