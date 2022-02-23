//-----------Mongoose----------- //
const mongoose = require('mongoose');

// importer mongoose pour me connecter à la base de donnée mongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAM}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// exportation mongosse pour y accéder dans un autre fichier
module.exports = mongoose;