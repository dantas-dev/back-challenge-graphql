const ErrorsFatal = require('../../app/errors/ErrorsFatal');
const ErrorsLogins = require('../../app/errors/ErrorsLogin');
const ErrorsForms = require('../../app/errors/ErrorsForms');
const ErrorsRegisteredEmail = require('../../app/errors/ErrorsRegisteredEmail');
const ErrorsRegisteredProject = require('../../app/errors/ErrorsRegisteredProject');
const ErrorsUnauthorizedAccess = require('../../app/errors/ErrorsUnauthorizedAccess');

module.exports = error => {
    if(error.originalError instanceof ErrorsLogins) {
        return new Error(error.extensions.exception.description)
    }

    if(error.originalError instanceof ErrorsUnauthorizedAccess) {
        return new Error(error.extensions.exception.description)
    }

    if(error.originalError instanceof ErrorsForms) {
        return new Error(error.extensions.exception.description)
    }

    if(error.originalError instanceof ErrorsRegisteredEmail) {
        return new Error(error.extensions.exception.description)
    }

    if(error.originalError instanceof ErrorsRegisteredProject) {
        return new Error(error.extensions.exception.description)
    }

    return new ErrorsFatal(error)
}