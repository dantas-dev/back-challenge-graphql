import { ApolloServer } from 'apollo-server';
import { typeDefsProject, typeDefsUser }  from './schemas';
import { resolversUser, resolversProject } from './resolvers'
import { sequelize } from './config/database';
import 'dotenv/config';

const server = new ApolloServer({
     typeDefs: [typeDefsProject, typeDefsUser],
     resolvers: [resolversUser, resolversProject] });

const startServer = async () => {
    try {
      await sequelize.sync();
      await server.listen({ port: process.env.DB_PORT }).then(({ url }) => {
          console.log(`Servidor iniciado em ${url}`);
      });
    } catch (error) {
      console.error('Erro ao iniciar o servidor:', error);
    }
  };
  
  startServer();
