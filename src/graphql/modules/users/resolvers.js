module.exports = {
    Query: {
        async login(_, { data }, { dataSources }) {
            return await dataSources.usersController.login(data) 
        }, 
        
        async users(_, {id, name}, { dataSources, authUser }) {
            await authUser()
            return await dataSources.usersController.listAllUser(id, name) 
        },
        
    },

    Mutation: {
        async createUser(_, { data }, { dataSources }) {
            return await dataSources.usersController.createUser(data) 
        },  
    }
}