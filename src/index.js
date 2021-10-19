import startServer from "./server";
import typeDefs from "./graphql/typeDefs"; 
import resolvers from "./graphql/resolvers"; 

startServer({typeDefs, resolvers});
