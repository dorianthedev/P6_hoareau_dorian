// importation du model de la base de donnée mongoDB
const Sauce = require('../models/Sauces')



///
exports.createSauce = (req, res, next) => {
    console.log("-----> Controllers/sauces req.body");
    console.log(req.body);

    console.log("-----> Controllers/sauces req.body.sauce");
    console.log(req.body.sauce);

    // pas besoin d'utiliser un json.parse
    const sauceObject = req.body.sauce

    //l'instance de sauce
    const sauce = new Sauce ({
        ...sauceObject
    })
    console.log("contenu du new models de sauce");
    console.log(sauce);

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