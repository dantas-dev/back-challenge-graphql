class ErrorsForms extends Error {

    constructor(message, ...args){
        super(message, ...args)

        this.message = message
        this.name = 'ERROR_FORM'
        this.code = 'CODE_ERROR_EF'
        this.description = 'Ocorreu um erro. Algum dado informado não está correto.' 
    }
}

module.exports = ErrorsForms;