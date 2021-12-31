const Project = require('../app/models/Project');
const ErrorsForms = require('../app/errors/ErrorsForms');
const ErrorsRegisteredProject = require('../app/errors/ErrorsRegisteredProject');
const { StringValidator, NumberValidator } = require('../helpers/validationsDefaultHelper');

module.exports = {
    createProjectValidations: async (project) => {
        if(!projectDefaultValidaion(project)) {
            throw new ErrorsForms()
        }

        if(await Project.findOne({where: { name: project.name } })) {
            throw new ErrorsRegisteredProject()
        } 

        return true
    }
}

function projectDefaultValidaion(project) {
    if(!StringValidator(project.name, min = 3, max = 100, isNull = false)) {
        return false
    }

    if(!NumberValidator(project.price, 0.01, 6000000, false)) {
        return false
    }
    
    return true
}