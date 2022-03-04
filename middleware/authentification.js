//importation de jsonwebtoken
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const result = dotenv.config();
//exportation de la fonction du middleware



module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
      const userId = decodedToken.userId;
      req.auth = { userId };  
      if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
        
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  };



// module.exports = (req, res, next) => {
//     try {
//         // récupérer le token dans le headers authorization : bearer
//         console.log("console middleware authentification");
//         const token = req.headers.authorization.split(" ")[1];

//         // décoder le token
//         const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
       

//         // récupérer le userId qu'il y a dans le token déchiffré
//         // et comparé avec le userId non chiffré
//         const userIdDecodedToken = decodedToken.userId;
       
        
//         //comparaison du userId qu'il y a en clair dans le req avec le userId qu'il y a dans le token


//         console.log("re.original url-----------");
//         console.log(req.originalUrl);
//               req.auth = { userIdDecodedToken};  


//         userIdParamsUrl = req.originalUrl.split("=")[1];
//         console.log("affichage de l'id-----------");
//         console.log(userIdParamsUrl);

//         // nouvelle versions correction erreur d'auth dans le cours OC
//         if (req._body === true) {
//             //controle quand ça passe par body raw avec postman
//             if (req.body.userId === userIdDecodedToken ) {
//                 // passer au middleware suivant
//                 next();
//             }
//             else {
//             throw " erreur d'authentification";
//             } 
//             // controle quand ça passe par form data (multer image) params url
//         } else if( userIdParamsUrl === userIdDecodedToken){
//             next();
//         } else {
//             throw "erreur identification url  params form-data";
//         }
        


//     // si il y a des erreurs dans le try on les récupères dans le catch
//     } catch (error) {
//         res.status(401).json({
//             message: "echec d'authentification",
//             error : error
//         });
//     }


    


// }


