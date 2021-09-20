import { app } from '@/drivers/api/config/app'
import { Connection } from '@/drivers/db/mysql/helpers/connection'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { mockCreateProjectDto, mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { Op } from 'sequelize'
import request from 'supertest'

describe('Project Routes', () => {
  beforeAll(async () => {
    await Connection.getInstance().connect()
    await migrationsUp()
  })

  afterAll(async () => {
    await migrationsDown()
    await Connection.getInstance().disconnect()
  })

  beforeEach(async () => {
    await ProjectModel.destroy({ where: { id: { [Op.not]: null } } })
  })

  describe('POST /api/project', () => {
    test('Should return 201 on create project', async () => {
      const user = await UserModel.create(mockCreateUserDto())
      await request(app)
        .post('/api/project')
        .send({
          name: 'Project X',
          price: 1200,
          userId: user.id
        })
        .expect(201)
    })

    test('Should return 400 on create project with invalid user relation', async () => {
      await request(app)
        .post('/api/project')
        .send({
          name: 'Project X',
          price: 1200,
          userId: 999999
        })
        .expect(400)
    })

    test('Should return 400 on create project with invalid params', async () => {
      await request(app)
        .post('/api/project')
        .send({
          name: 'Project X',
          price: 1200
        })
        .expect(400)
    })
  })

  describe('GET /api/project', () => {
    test('Should return 200 on get all projects', async () => {
      const user = await UserModel.create(mockCreateUserDto())
      await ProjectModel.create(mockCreateProjectDto(user.id))
      await request(app)
        .get('/api/project')
        .expect(200)
    })
  })
})
