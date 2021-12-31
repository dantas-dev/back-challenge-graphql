const ErrorsUnauthorizedAccess = require('../../app/errors/ErrorsUnauthorizedAccess')
const { verifyToken } = require('../../helpers/tokenHelper');

module.exports = ({ req }) => {
    
    const userToken = req.headers.authtoken

    return {
        userToken,
        async authUser() {
            try {
                if(!userToken) {
                    throw new Error('NOT_TOKEN')
                }
                
                const user_id = verifyToken(userToken)

                return user_id

            } catch (error) {
                throw new ErrorsUnauthorizedAccess('não autorizado') 
            }
        }
    }
}