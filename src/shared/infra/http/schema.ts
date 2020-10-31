import { buildSchema } from 'type-graphql';

import UserResolver from '@modules/users/graphql/resolver';
import ProjectResolver from '@modules/projects/graphql/resolver';

export const createSchema = () =>
  buildSchema({
    resolvers: [UserResolver, ProjectResolver],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    },
  });
