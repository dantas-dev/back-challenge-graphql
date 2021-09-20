import { Express, Router } from 'express'
import { readdirSync, statSync } from 'fs'
import path from 'path'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  const importRoutes = (directory: string): void => {
    readdirSync(directory).map(async file => {
      const absolute = path.join(directory, file)
      if (statSync(absolute).isDirectory()) {
        return importRoutes(absolute)
      } else if (!file.endsWith('.map')) {
        (await import(absolute)).default(router)
      }
    })
  }
  importRoutes(path.join(__dirname, '../routes'))
}
