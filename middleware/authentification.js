//importation de jsonwebtoken
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//exportation de la fonction du middleware

module.exports = (req, res, next) => {
    try {
        // récupérer le token dans le headers authorization : bearer
        console.log("console middleware authentification");
        const token = req.headers.authorization.split(" ")[1];

        // décoder le token
        const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
       

        // récupérer le userId qu'il y a dans le token déchiffré
        // et comparé avec le userId non chiffré
        const userIdDecodedToken = decodedToken.userId;
       

        //comparaison du userId qu'il y a en clair dans le req avec le userId qu'il y a dans le token

        if (req.body.userId && req.body.userId !== userIdDecodedToken) {
            throw 'Invalid user ID';
        } else {
            next();
        }
        //passer au middleware suivant


    // si il y a des erreurs dans le try on les récupères dans le catch
    } catch (error) {
        res.status(401).json({error});
    }
}