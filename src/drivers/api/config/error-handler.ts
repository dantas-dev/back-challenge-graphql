import { Express } from 'express'

export default (app: Express): void => {
  app.use(function (err, _req, res, _next) {
    console.error(err.stack)
    res.status(500).send({ error: 'InternalServerError', message: 'Something broke!' })
  })
}
