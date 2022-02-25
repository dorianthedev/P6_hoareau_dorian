// importation du models de la base de donnée User.js
const User = require('../models/User')


//signup pour enregistrer un noucel user dans la base de donnée
// exports pour exporter dnas la routes/user.js
exports.signup = (req, res, next) => {
    
            const user = new User({
            email: req.body.email,
            password: req.body.password
            });
            user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ error }));
        
};

