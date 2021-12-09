import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql';
import Context from '../../context/Context';
import projectConnection from '../types/connections/projectConnection';
import nodesToEdges from './nodesToEdges';
import toConnection from './toConnection';
import projectsOrder from '../types/inputs/projectsOrder';
import {GraphQLFloat} from 'graphql/type/scalars';

interface ProjectsQueryArguments {
  first: number;
  after: number;
  name: string;
  price: number;
  orderBy: any[];
}

export default {
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
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
    orderBy: {
      type: new GraphQLList(projectsOrder),
    },
  },
  resolve: async (_, args: ProjectsQueryArguments, context: Context) => {
    const after = typeof args.after === 'undefined' || args.after === null ?
      0 :
      args.after;
    const projects = await context.repositories.project.find({
      first: args.first,
      after,
      name: args.name,
      price: args.price,
      orderBy: args.orderBy,
    });
    const projectsCount = await context.repositories.project.count({
      name: args.name,
      price: args.price,
    });
    const edges = nodesToEdges(projects, after);
    return toConnection(
      edges, projectsCount, edges.length === args.first, after > 0);
  },
};
