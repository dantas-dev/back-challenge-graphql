const Project = require('../models/Project');
const { Op } = require('sequelize');
const { createProjectValidations } = require('../../validations/projectsValidations');
const { serializeString, serializePrice } = require('../../helpers/serializeHelpers');

class ProjectsController {
    async listAllProjects(id, name) {
        try {
            let filter = {};

            if(id) {
                filter = {...filter, id}
            } 

            if(name) {
                filter = {...filter, name: { [Op.substring]: name }}
            }

            return await Project.findAll({ where: filter, include: { association: 'user' } })

        } catch (error) {
            return error
        }
    }

    async createProject(data, user_id) {
        try {
            const project = serializeProjects(data)
            await createProjectValidations(project)

            return await Project.create({...project, user_id})

        } catch (error) {
            return error
        }
    }
}    

function serializeProjects(project) {
    return {
        name: serializeString(project.name),
        price: serializePrice(project.price),
    }
}

module.exports = new ProjectsController()