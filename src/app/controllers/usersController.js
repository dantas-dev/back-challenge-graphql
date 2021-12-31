const User = require('../models/User');
const ErrorsLogin = require('../errors/ErrorsLogin');
const { Op } = require('sequelize')
const { createUserValidations } = require('../../validations/usersValidations');
const { decryptPassword, encryptPassword } = require('../../helpers/passwordHelper');
const { generatorToken } = require('../../helpers/tokenHelper');
const { serializeString, serializePassword } = require('../../helpers/serializeHelpers');

class UserController {
    async login(data) {
        try {
            const email = serializeString(data.email)
            const password = serializePassword(data.password)

            const user = await User.findOne({ where: { email } })
            
            if(!user) {
                throw new ErrorsLogin() 
            } 

            if(!await decryptPassword(user.password, password)) {
                throw new ErrorsLogin() 
            } 

            user.token = await generatorToken(user)
            return user

        } catch (error) {
            return error
        }
    }

    async listAllUser(id, name) {
        try {
            let filter = {};

            if(id) {
                filter = {...filter, id}
            } 

            if(name) {
                filter = {...filter, name: { [Op.substring]: name }}
            }

            return await User.findAll({ where: filter })

        } catch (error) {
            return error
        }
    }

    async createUser(data) {
        try {
            let user = serializeUser(data)
            await createUserValidations(user)

            user = {...user, password: await encryptPassword(user.password)}
            return await User.create(user)

        } catch (error) {
            return error
        }
    }
}    

function serializeUser(user) {
    return {
        name: serializeString(user.name),
        email: serializeString(user.email),
        password: serializePassword(user.password)
    }
}

module.exports = new UserController()