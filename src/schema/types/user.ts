import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import Context from '../../context/Context';
import { formatDate } from '../../utils/functions';
import projectConnection from './connections/projectConnection';
import nodesToEdges from '../queries/nodesToEdges';
import toConnection from '../queries/toConnection';
import { User } from '../../types';

const user = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Database ID of the user',
      resolve: (obj: User): number => {
        return obj.id;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User\'s name',
      resolve: (obj: User): string => {
        return obj.name;
      },
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User\'s email',
      resolve: (obj: User): string => {
        return obj.email;
      },
    },
    projects: {
      type: projectConnection,
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
        query: {
          type: GraphQLString,
        },
      },
      resolve: async (obj: User, args, context: Context): Promise<any> => {
        const after = typeof args.after === 'undefined' || args.after === null ? 0 : parseInt(args.after, 10);
        const projects = await context.repositories.project.find({
          first: args.first,
          after,
          userId: obj.id,
          query: args.query,
        });
        const projectsCount = await context.repositories.project.count({
          userId: obj.id,
          query: args.query,
        });
        const edges = nodesToEdges(projects, after);
        return toConnection(edges, projectsCount, edges.length === args.first, after > 0);
      }
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return formatDate(new Date(obj.createdAt));
      },
    },
  }),
});

export default user;
