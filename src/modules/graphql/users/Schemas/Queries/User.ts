import { GraphQLList, GraphQLString } from "graphql";

import { UserType } from "../TypeDefs/User";
import AppError from "@shared/errors/AppError";
import { Users } from "../../typeorm/entities/Users";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}

export const GET_ONE_USER = {
    type: new GraphQLList(UserType),

    args: {
        name: { type: GraphQLString }
    },

    async resolve(parent: any, args: any) {
        const { name } = args;
        
        const user = await Users.find({name: name});

        if(!user) {
            new AppError('Usuário inexistente')
        }
        return user;
    }
}