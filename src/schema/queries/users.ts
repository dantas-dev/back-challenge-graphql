import {GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import Context from '../../context/Context';
import userConnection from '../types/connections/userConnection';
import usersOrder from '../types/inputs/usersOrder';
import nodesToEdges from './nodesToEdges';
import toConnection from './toConnection';

interface UsersQueryArguments {
  first: number;
  after: number;
  name: string;
  email: string;
  orderBy: any[];
}

export default {
  type: userConnection,
  args: {
    first: {
      defaultValue: 10,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
      type: GraphQLInt,
    },
    after: {
      defaultValue: 0,
      description: 'The cursor value of an item returned in previous page. An alternative to in integer offset.',
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    orderBy: {
      type: new GraphQLList(usersOrder),
    },
  },
  resolve: async (_, args: UsersQueryArguments, context: Context) => {
    const after = typeof args.after === 'undefined' || args.after === null ?
      0 :
      args.after;
    const users = await context.repositories.user.find({
      first: args.first,
      after,
      name: args.name,
      email: args.email,
      orderBy: args.orderBy,
    });
    const usersCount = await context.repositories.user.count({
      name: args.name,
      email: args.email,
    });
    const edges = nodesToEdges(users, after);
    return toConnection(
      edges, usersCount, edges.length === args.first, after > 0);
  },
};
