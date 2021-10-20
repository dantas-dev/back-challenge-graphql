import User from '../../../app/models/User';

export default {

    Query: {

        users: async (_, args) => {

            const filter = args.filter;
            const limit = args.limit ? args.limit : 5;
            const offset = 0 + ((args.page ? args.page : 1) - 1) * limit

            const {count, rows: users} = filter
                ? await User.findAndCountAll({ where: {name: filter}, limit: limit, offset: offset}) 
                : await User.findAndCountAll({limit: limit, offset: offset})
                            
            return users;
        },
        user: async (_, { id }) => await User.findByPk(id), 
    },

    Mutation: {
        createUser: async (_, { data }) => await User.create(data),
    },
}