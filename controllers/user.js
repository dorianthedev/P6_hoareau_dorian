// impoortation de bcrypt pour hash le password
const bcrypt = require('bcrypt');
// importation de cryptojs pour chiffrer le mail
const cryptojs = require('crypto-js')
//importation de jsonwebtoken
const jwt = require('jsonwebtoken')
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
        bcrypt
        .hash(req.body.password, 10) // 10 = salt = nombre de fois hash algorithme
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

//login pour chercher et connect un user qui est dans la base de donnée

exports.login = (req, res, next) => {
    console.log("--> Contenu login: req.body.email ");
    console.log(req.body.email);

    console.log("--> Contenu login: req.body.email ");
    console.log(req.body.password);

    //chiffrer l'email de la requete
    const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();

    // chercher dans la base de donnée si l'utlisateur est présent
    User.findOne({ email: emailCryptoJs })

    // si le mail de l'user n'est pas présent, il n'existe pas
    .then((user) => {
        if (!user) {
            return res.status(401).json({error : "Utilisateur inexistant"})
        }
        //controler la validité du password envoyer par le front
        bcrypt
            .compare(req.body.password, user.password)
            .then((controlPassword) => {
                console.log("controlPassword");
                console.log(controlPassword);

                if (!controlPassword) {
                    return res.status(401).json({error : "Le mot de passe est incorrect"})
                }
                // si le password est correct
                // envoie dans la res du serveur userId et du token d'authentification
                res.status(200).json({
                    // encodage de l'userId pour la création d'un nouveau objet (objet et userId seront liés)
                    userId: user._id,
                    token: jwt.sign(
                        //3 arguments
                        {userId: user._id},
                        `${process.env.JWT_KEY_TOKEN}`,
                        {expiresIn: "12h"}
                        
                    )
                    
                
                })
                
            })

            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));

};

