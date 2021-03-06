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
