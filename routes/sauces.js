// importation express pour utiliser les outils express
const express = require('express')

// importation du controllers/sauces.js
const saucesController = require("../controllers/sauces")

// la fonction router()
const router = express.Router();

// iportation middleware d'authentification
const authentification = require('../middleware/authentification');

// les routes
router.post('/',authentification, saucesController.createSauce); // créer une sauce

router.get('/',authentification, saucesController.getAllSauce); // afficher tout les objets

router.get('/:id',authentification, saucesController.getOneSauce); // afficher une sauce unique grâce à son id

router.put('/:id',authentification, saucesController.updateOneSauce) // modifier une sauce grâce à son id

router.delete('/:id',authentification, saucesController.deleteOneSauce) // supprimer une sauce grâce à son id


// exportation du module
module.exports = router;