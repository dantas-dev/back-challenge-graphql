class ErrorsLogins extends Error {

    constructor(message, ...args){
        super(message, ...args)

        this.message = message
        this.name = 'ERROR_LOGIN'
        this.code = 'CODE_ERROR_EL'
        this.description = 'Usuário ou Senha Invalidos' 
    }
}

module.exports = ErrorsLogins;