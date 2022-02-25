// impoortation de bcrypt pour hash le password
const bcrypt = require('bcrypt');
// importation du models de la base de donnée User.js
const User = require('../models/User');


//signup pour enregistrer un noucel user dans la base de donnée
// exports pour exporter dnas la routes/user.js
// hash du password avant de l'envoyer dans la db

exports.signup = (req, res, next) => {
        bcrypt.hash(req.body.password, 10) // 10 = salt = nombre de fois hash algorithme
        .then(hash => {
            const user = new User({
            email: req.body.email,
            password: hash
            });
            user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

