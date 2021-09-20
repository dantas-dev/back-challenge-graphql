import { Connection } from '@/drivers/db/mysql/helpers/connection'
import UserModel from '@/drivers/db/mysql/models/user-model'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import { DbCreateProjectRepository, DbGetProjectsRepository } from '@/drivers/db/mysql/repositories'
import { mockCreateProjectDto, mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { Op } from 'sequelize'
// import { throwRelationError } from '@/tests/application/mocks/test-helpers'
// import { InvalidRelationError } from '@/presentation/errors'

type sutTypes = {
  sut: DbGetProjectsRepository
  createProject: DbCreateProjectRepository
}

const makeSut = (): sutTypes => {
  return {
    sut: new DbGetProjectsRepository(),
    createProject: new DbCreateProjectRepository()
  }
}

describe('GetProjectsRepository', () => {
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

  describe('getAll()', () => {
    test('Should return a list of projects on success', async () => {
      const { sut, createProject } = makeSut()
      const mockUser = mockCreateUserDto()
      const user = await UserModel.create(mockUser)
      const mockRequest = mockCreateProjectDto(user.id)
      await createProject.create(mockRequest)

      const projects = await sut.getAll()
      expect(projects).toBeTruthy()
    })

    test('Should not throw when there is no projects', async () => {
      const { sut } = makeSut()
      const projects = await sut.getAll()
      expect(projects).toBeTruthy()
      expect(projects).toStrictEqual([])
    })
  })
})
