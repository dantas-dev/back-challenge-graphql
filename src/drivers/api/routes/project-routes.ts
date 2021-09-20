import { adaptRoute } from '@/drivers/api/adapters'
import { makeGetProjectsController, makeCreateProjectController } from '@/factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/project', adaptRoute(makeCreateProjectController()))
  router.get('/project', adaptRoute(makeGetProjectsController()))
}
