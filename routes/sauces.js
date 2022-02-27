// importation express pour utiliser les outils express
const express = require('express')

// importation du controllers/sauces.js
const saucesController = require("../controllers/sauces")

// la fonction router()
const router = express.Router();

// les routes
router.post('/creationsauces', saucesController.createSauce)



// exportation du module
module.exports = router;