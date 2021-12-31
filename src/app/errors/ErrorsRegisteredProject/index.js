class ErrorsRegisteredProject extends Error {

    constructor(message, ...args){
        super(message, ...args)

        this.message = message
        this.name = 'ERROR_REGISTERED_PROJECT'
        this.code = 'CODE_ERROR_ERPROJECT'
        this.description = 'Ocorreu um erro. projeto já cadastrado.' 
    }
}

module.exports = ErrorsRegisteredProject;