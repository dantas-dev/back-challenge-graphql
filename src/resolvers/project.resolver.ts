import { Op } from 'sequelize';
import { Project } from '../models/Project';

export const resolversProject = {
    Query: {
        projects: async () => {
            return await Project.findAll()

        },
        filterProjectById: async (_: any, args: any) => {
            const { id } = args
            return await Project.findByPk(id)

        },
        filterProjectsByName: async (_:any, args: any) => {
            const { name } = args
            return await Project.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            })
        }
    },

    Mutation: {
        createProject: async (_: any, args: any) => {
            const project = await Project.create({
                name: args.input.name,
                price: args.input.price,
                userId: args.input.userId
            });
            
            return project;
        },

    }
};