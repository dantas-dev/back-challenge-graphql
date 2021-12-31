class ErrorsUnauthorizedAccess extends Error {

    constructor(message, ...args){
        super(message, ...args)

        this.message = message
        this.name = 'ERROR_UNAUTHORIZED_ACCESS'
        this.code = 'CODE_ERROR_EUA'
        this.description = 'Acesso negado. Usuário sem permissão.' 
    }
}

module.exports = ErrorsUnauthorizedAccess;