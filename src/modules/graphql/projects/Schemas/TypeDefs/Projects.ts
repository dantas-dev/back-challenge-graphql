import { Users } from '@modules/graphql/users/typeorm/entities/Users';
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

import { UserType } from '@modules/graphql/users/Schemas/TypeDefs/User';

export const ProjectType = new GraphQLObjectType({
    name: "Projects",
    fields: () => ({
        id: {type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLString },
        id_user: { type: GraphQLID },
        user: { type: UserType }
    })
})
