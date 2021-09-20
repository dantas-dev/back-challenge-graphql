import resolvers from '@/drivers/graphql/resolvers'
import typeDefs from '@/drivers/graphql/type-defs'

import { ApolloServer } from 'apollo-server-express'

export const makeApolloServer = (): ApolloServer => new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => ({ req })
})
