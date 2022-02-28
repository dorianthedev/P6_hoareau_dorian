// importation express pour utiliser les outils express
const express = require('express')

// importation du controllers/sauces.js
const saucesController = require("../controllers/sauces")

// la fonction router()
const router = express.Router();

// les routes
router.post('/', saucesController.createSauce); // créer une sauce

router.get('/', saucesController.getAllSauce); // afficher tout les objets

router.get('/:id', saucesController.getOneSauce); // afficher une sauce unique avec id

router.put('/:id', saucesController.updateOneSauce)



// exportation du module
module.exports = router;