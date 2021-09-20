import { app } from '@/drivers/api/config/app'
import { Connection } from '@/drivers/db/mysql/helpers/connection'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { Op } from 'sequelize'
import request from 'supertest'

describe('User Routes', () => {
  beforeAll(async () => {
    await Connection.getInstance().connect()
    await migrationsUp()
  })

  afterAll(async () => {
    await migrationsDown()
    await Connection.getInstance().disconnect()
  })

  beforeEach(async () => {
    await UserModel.destroy({ where: { id: { [Op.not]: null } } })
  })

  describe('POST /api/user', () => {
    test('Should return 201 on create user', async () => {
      await request(app)
        .post('/api/user')
        .send({
          name: 'User X',
          email: 'valid@mail.com'
        })
        .expect(201)
    })

    test('Should return 400 on create user with invalid params', async () => {
      await request(app)
        .post('/api/user')
        .send({
          name: 'Project X'
        })
        .expect(400)
    })
  })

  describe('GET /api/user', () => {
    test('Should return 200 on get all users', async () => {
      await UserModel.create(mockCreateUserDto())
      await request(app)
        .get('/api/user')
        .expect(200)
    })
  })
})
