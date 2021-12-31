class ErrorsRegisteredEmail extends Error {

    constructor(message, ...args){
        super(message, ...args)

        this.message = message
        this.name = 'ERROR_REGISTERED_EMAIL'
        this.code = 'CODE_ERROR_EREMAIL'
        this.description = 'Ocorreu um erro. EMAIL já cadastrado.' 
    }
}

module.exports = ErrorsRegisteredEmail;