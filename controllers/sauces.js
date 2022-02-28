// importation du model de la base de donnée mongoDB
const Sauce = require('../models/Sauces')



///
exports.createSauce = (req, res, next) => {

    // pas besoin d'utiliser un json.parse
    const sauceObject = req.body.sauce

    //l'instance de sauce
    const sauce = new Sauce ({
        ...sauceObject
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
    console.log("route getONE");
    console.log(req.params.id);  
    console.log({ _id : req.params.id});  

    // res.status(200).json({
    //     message: "ok",
    //     contenu: { _id : req.params.id}
    // })

    Sauce
    .findOne({ _id : req.params.id})
    .then((lObjet) => res.status(200).json(lObjet))
    .catch((error) => res.status(404).json({error}))
}