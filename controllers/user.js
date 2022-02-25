// impoortation de bcrypt pour hash le password
const bcrypt = require('bcrypt');
// importation de cryptojs pour chiffrer le mail
const cryptojs = require('crypto-js')
// importation du models de la base de donnée User.js
const User = require('../models/User');
// importation pour utiliser les variables d'environnement
const dotenv = require('dotenv');
const result = dotenv.config();



//signup pour enregistrer un noucel user dans la base de donnée
// exports pour exporter dnas la routes/user.js

exports.signup = (req, res, next) => {
        // chiffrer l'email avant de l'envoyer de la base de donnée
        const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();

        // hash du password avant de l'envoyer dans la db
        bcrypt.hash(req.body.password, 10) // 10 = salt = nombre de fois hash algorithme
        .then(hash => {
            const user = new User({
            email: emailCryptoJs,
            password: hash
            });
            user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

