class ErrorsFatal extends Error {
    constructor(error){
        const objectErrorFatal = {
            message: error.message,
            name:  "ERROR_FATAL",
            code:  "CODE_ERROR_FATAL",
            description:  "Ocorreu um erro inesperado. Tente novamente mais tarde",       
            stacktrace: []
        }
        
        return error.extensions.exception = { ...error.extensions.exception, ...objectErrorFatal }
    }
}

module.exports = ErrorsFatal;