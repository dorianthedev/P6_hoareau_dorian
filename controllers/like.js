// importation du model de la base de donnée mongoDB
const Sauce = require('../models/Sauces')

exports.likeSauce = (req, res, next) => {
    console.log("controller like");
     console.log(req.body)

    //aller chercher l'objet dans la base de donnée
    Sauce
    .findOne({_id : req.params.id})
    .then((objet) => {
        //like = 1 (likes = +1)
        //utilisation de la méthode javascript includes()
        //utilisation de l'opérateur $inc (mongoDB)
        //utilisation de l'opérateur $push (mongoDB)
        //utilisation de l'opérateur $pull (mongoDB)



    })
    .catch((error) => res.status(400).json({error}));


    


    //like = 0 (like =0 pas de vote)

    // like = -1 (dislikes =+1)


    //like =0 (dislikes =0)
}