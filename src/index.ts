import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';



const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Servidor rodando na porta ${url}`)
  })

