import setupMiddlewares from './middlewares'
import setupApolloServer from './apollo-server'
import setupRoutes from './routes'
// import setupErrorHandler from './error-handler'

import express from 'express'

const app = express()
setupApolloServer(app)
setupMiddlewares(app)
setupRoutes(app)
// setupErrorHandler(app)
export { app }
