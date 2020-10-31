import { graphql, GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';

import { createSchema } from './schema';

interface IMaybeVariables {
  [key: string]: any; // deepcode ignore no-any: ignore informed variable of any type
}

interface IOptions {
  source: string;
  variableValues?: Maybe<IMaybeVariables>;
}

let schema: GraphQLSchema;

export const gCall = async ({ source, variableValues }: IOptions) => {
  if (!schema) {
    schema = await createSchema();
  }
  return graphql({
    schema,
    source,
    variableValues,
    contextValue: {
      req: {
        session: {},
      },
      res: {
        clearCookie: jest.fn(),
      },
    },
  });
};
