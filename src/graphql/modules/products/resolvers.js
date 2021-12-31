module.exports = {
    Query: {
        async projects(_, { id, name }, { dataSources, authUser }) {
            await authUser()
            return await dataSources.projectsController.listAllProjects(id, name) 
        },  
    },

    Mutation: {
        async createProject(_, { data }, { dataSources, authUser }) {
            const user_id = await authUser()
            return await dataSources.projectsController.createProject(data, user_id) 
        },  
    }
}