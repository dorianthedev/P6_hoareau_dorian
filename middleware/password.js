// importation password validator
const passwordValidator = require('password-validator')

//shema du password que le user doit respecté
const passwordShema = new passwordValidator();

// Add properties to it
passwordShema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['azerty', 'qwerty']);        // Blacklist these values


module.exports = (req, res, next) => {
    if(passwordShema.validate(req.body.password)){
        next();
    }else {

        return res.status(400).json({error : "Le mot de passe n'est pas assez fort :"+ passwordShema.validate('req.body.password', { list : true})})
    }
}