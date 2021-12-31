const jwt = require('jsonwebtoken')
const authConfig = require('../config/authConfiguration');

const generatorToken = async user => {
    try {
        const { id } = user

        const token = await jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn 
        })
        
        return token

    } catch (error) {
        throw new Error(error)
    }
}

const verifyToken = token => {
    try {
        const { id } = jwt.verify(token, authConfig.secret)
        return id;

    } catch (error) {
        throw new Error()
    }
}

module.exports = { generatorToken, verifyToken }