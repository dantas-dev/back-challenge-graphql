import Project from '../../../app/models/Project';
import User from '../../../app/models/User';

export default {
    Project: {
        userid: (project) => User.findByPk(project.userid, {attributes: [['id', '_id'], 'name', 'email']})
    },

    Query: {
        projects: () => Project.findAll({ attributes: [['id', '_id'], 'name', 'price', 'userid'] }),
        project: (_, { id }) => Project.findByPk(id, { attributes: [['id', '_id'], 'name', 'price', 'userid'] }),
    },

    Mutation: {
        createProject: (_, { data }) => Project.create(data),
    },
}