// importation du model de la base de donnée mongoDB
const Sauce = require('../models/Sauces')

const fs = require('fs');

const jwt = require('jsonwebtoken');


exports.createSauce = (req, res, next) => {

    // Besoin d'utiliser un json.parse
    const sauceObject = JSON.parse(req.body.sauce);
    //l'instance de sauce
    const sauce = new Sauce ({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    })


    // enregister l'objet dans la base de donnée
    sauce
    .save()
    .then(() => {
        res.status(201).json({
            message: "objet enregistré dans la base de donnée",
            contenu: req.body
        })
    })
    .catch((error) => res.status(400).json({error}))

}


exports.getAllSauce = (req, res, next) => {
    Sauce
    .find()
    .then((toutesLesSauces) => res.status(200).json(toutesLesSauces))
    .catch((error) => res.status(400).json({error}))
}

exports.getOneSauce = (req, res, next) => {

    Sauce
    .findOne({ _id : req.params.id})
    .then((lObjet) => res.status(200).json(lObjet))
    .catch((error) => res.status(404).json({error}))
}

exports.updateOneSauce = (req, res, next) => {

    // modification qui seront envoyé dnas la base de donnée
    const sauceObject = req.file ?
    {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };


    Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);        
        const userId = decodedToken.userId;

        if (userId === sauce.userId) {
            const filename = sauce.imageUrl.split('/images/')[1];

            fs.unlink(`images/${filename}`, () => {
                Sauce
                .updateOne( { _id : req.params.id}, {...sauceObject, _id : req.params.id} )
                .then(() => res.status(200).json({message:"l'objet à été modifié"}))
                .catch(error => res.status(400).json({error}))
            });
        
        } else {
            throw "requete non autorisé"
        }
        
    })
    .catch(error => res.status(403).json({ error }));
    


    
}

exports.deleteOneSauce = (req, res, next) => {

    Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
        console.log("--------req");
        console.log(req);
        console.log("--------sauce");
        console.log(sauce);

        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);        
        const userId = decodedToken.userId;

        

        if (userId === sauce.userId) {
            const filename = sauce.imageUrl.split('/images/')[1];

            // supprime l'image de notre server aussi

            fs.unlink(`images/${filename}`, () => {
                Sauce.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
                .catch(error => res.status(400).json({ error }));
            });

            
        } else {
            throw "requete non autorisé"
        }
        
    })
        .catch(error => res.status(403).json({ error }));
};
