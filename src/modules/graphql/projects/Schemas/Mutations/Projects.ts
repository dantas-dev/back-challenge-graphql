import { UserType } from '../../../users/Schemas/TypeDefs/User';
import { Projects } from "../../typeorm/entities/Projects";
import { ProjectType } from "../TypeDefs/Projects";
import { GraphQLID, GraphQLString } from "graphql";

export const CREATE_PROJECTS = {
    type: ProjectType,
    args: {
        name: { type: GraphQLString },
        price: { type: GraphQLString },
        id_user: { type: GraphQLID }
    },

    async resolve(parent: any, args: any) {
        const { name, price, id_user } = args;

        await Projects.insert({name, price, id_user })
        
        return args;
    }
}