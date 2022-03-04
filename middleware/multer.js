// pour gérer les requetes http avec envois de fichier
const multer = require('multer');

//le dictionnaire des MIME_TYPES
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  };

// la destination du fichier (repertoire) et générer un nom de fichier unique
const storage = multer.diskStorage({
    // la destination de stokage du fichier

    destination : (req, file, callback) => {
        callback(null, "images");
        
    },
    filename : (req, file, callback) => {
        // supprimer les espaces dans le nom de fichier
        const name = file.originalname.split(" ").join("_");
        const extension = MIME_TYPES[file.mimetype];

        callback(null, name + "_" + Date.now() + '.' + extension)
    }
})


// exportation du middleware multer
module.exports = multer({storage: storage}).single('image');