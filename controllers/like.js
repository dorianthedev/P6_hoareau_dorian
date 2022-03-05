// importation du model de la base de donnée mongoDB
const Sauce = require('../models/Sauces')

exports.likeSauce = (req, res, next) => {
    

    //aller chercher l'objet dans la base de donnée
    Sauce
    .findOne({_id : req.params.id})
    .then((objet) => {
        
        
        //like = 1 (likes = +1)
        // si usersLiked False (no id) et si like === 1
        if (!objet.usersLiked.includes(req.body.userId) && req.body.like ===1 ) {
            

            //mise à jour bdd
            Sauce.updateOne(
                {_id : req.params.id},
                {
                    $inc: {likes: 1},
                    $push: {usersLiked: req.body.userId}
                    
                }
            )
            
            .then(() => console.log("likes +1"), res.status(201).json({message: "sauces like 1" }))
            .catch((error) => res.status(400).json({error}))

        }
         //like = 0 (like =0 pas de vote)
        if (objet.usersLiked.includes(req.body.userId) && req.body.like === 0 ) {
            

            //mise à jour bdd
            Sauce.updateOne(
                {_id : req.params.id},
                {
                    $inc: {likes: -1},
                    $pull: {usersLiked: req.body.userId}
                    
                }
            )
            .then(() => console.log("like -1"), res.status(201).json({message: "sauces like 0" }))
            .catch((error) => res.status(400).json({error}))

        }
        // like = -1 (dislikes =+1)
        if (!objet.usersDisliked.includes(req.body.userId) && req.body.like === -1 ) {
            

            //mise à jour bdd
            Sauce.updateOne(
                {_id : req.params.id},
                {
                    $inc: {dislikes: 1},
                    $push: {usersDisliked: req.body.userId}
                    
                }
            )
            .then(() => console.log("dislikes +1"), res.status(201).json({message: "sauces like 0" }))
            .catch((error) => res.status(400).json({error}))

        }
        //like =0 (dislikes =0)
        // Apres un like -1 on met un like qui =0 (likes = 0 = pas de votes on enleve le dislike)
        if (objet.usersDisliked.includes(req.body.userId) && req.body.like === 0 ) {
            

            //mise à jour bdd
            Sauce.updateOne(
                {_id : req.params.id},
                {
                    $inc: {dislikes: -1},
                    $pull: {usersDisliked: req.body.userId}
                    
                }
            )
            .then(() =>console.log("dislikes -1"), res.status(201).json({message: "sauces like 0" }))
            .catch((error) => res.status(400).json({error}))

        }




    })
    .catch((error) => res.status(400).json({error}));
}

//utilisation de la méthode javascript includes()
        //utilisation de l'opérateur $inc (mongoDB)
        //utilisation de l'opérateur $push (mongoDB)
        //utilisation de l'opérateur $pull (mongoDB)