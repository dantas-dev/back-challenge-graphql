import { adaptRoute } from '@/drivers/api/adapters'
import { makeGetUsersController, makeCreateUserController } from '@/factories/controllers'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/user', adaptRoute(makeCreateUserController()))
  router.get('/user', adaptRoute(makeGetUsersController()))
}
