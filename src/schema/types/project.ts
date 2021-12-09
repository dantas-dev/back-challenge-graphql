import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import Context from '../../context/Context';
import user from './user';
import {formatDate} from '../../utils/functions';
import {Project, User} from '../../types';
import {GraphQLFloat, GraphQLInt} from 'graphql/type/scalars';

const project = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Globally unique ID of the project',
      resolve: (obj: Project): number => {
        return obj.id;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Project\'s first name',
      resolve: (obj: Project): string => {
        return obj.name;
      },
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'Preço do projeto',
      resolve: (obj: Project): number => {
        return obj.price;
      },
    },
    user: {
      type: user,
      description: 'User of the project',
      resolve: (obj: Project, args, context: Context): Promise<User> => {
        return context.loaders.user.load(obj.userId);
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Project): string => {
        return formatDate(new Date(obj.createdAt));
      },
    },
  }),
});

export default project;
