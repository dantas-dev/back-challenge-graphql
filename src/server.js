import {ApolloServer} from 'apollo-server';

import './database';

function startServer({typeDefs, resolvers}){
    const server = new ApolloServer({typeDefs, resolvers});
    server.listen(3000).then(({url}) => {
        console.log(`Server started at ${url}`);
    });
};


export default startServer;