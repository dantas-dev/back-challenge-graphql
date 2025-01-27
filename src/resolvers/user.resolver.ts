import { Op } from 'sequelize';
import { User } from '../models/User';

export const resolversUser = {
    Query: {
        users: async () => {
            return await User.findAll();
        },
        filterUserById: async (_: any, args: any) => {
            const { id } = args
            return await User.findByPk(id)
           
        },
        filterUsersByName: async (_:any, args: any) => {
            const { name } = args
            return await User.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            })
        }
    },

    Mutation: {
        createUser: async (_: any, args: any) => {
            const user = await User.create({
                name: args.input.name,
                email: args.input.email
            })
            
            return user;
        },
    }
};