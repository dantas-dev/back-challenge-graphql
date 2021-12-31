const User = require('../app/models/User');
const ErrorsForms = require('../app/errors/ErrorsForms');
const ErrorsRegisteredEmail = require('../app/errors/ErrorsRegisteredEmail');
const { StringValidator } = require('../helpers/validationsDefaultHelper');

module.exports = {
    createUserValidations: async (user) => {
        if(!userDefaultValidaion(user)) {
            throw new ErrorsForms()
        }

        if(await User.findOne({where: { email: user.email } })) {
            throw new ErrorsRegisteredEmail()
        } 

        return true
    }
}

function userDefaultValidaion(user) {
    if(!StringValidator(user.name, min = 3, max = 100, isNull = false)) {
        return false
    }

    if(!StringValidator(user.email, min = 8, max = 150, isNull = false)) {
        return false
    }

    if(!StringValidator(user.password, min = 6, max = 50, isNull = false)) {
        return false
    }
    
    return true
}