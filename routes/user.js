// importation express pour utiliser les outils express
const express = require('express')
//importation du controllers/user.js
const userController = require('../controllers/user');
//la fonction router
const router = express.Router();

//la route (endpoint) signup
router.post("/signup", userController.signup);

//la route login



//exportation du module
module.exports = router;