import { Connection } from '@/drivers/db/mysql/helpers/connection'
import UserModel from '@/drivers/db/mysql/models/user-model'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import { DbCreateProjectRepository } from '@/drivers/db/mysql/repositories'
import { mockCreateProjectDto, mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { Op } from 'sequelize'
import { throwDatabaseError, throwRelationError } from '@/tests/application/mocks/test-helpers'
import { InvalidRelationError, MissingParamError } from '@/presentation/errors'

const makeSut = (): DbCreateProjectRepository => {
  return new DbCreateProjectRepository()
}

describe('CreateProjectRepository', () => {
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

  describe('create()', () => {
    test('Should return a user on success', async () => {
      const sut = makeSut()
      const mockUser = mockCreateUserDto()
      const user = await UserModel.create(mockUser)
      const mockRequest = mockCreateProjectDto(user.id)
      const created = await sut.create(mockRequest)
      expect(created).toBeTruthy()
    })

    test('Should throw if ProjectModel throws relation Error', async () => {
      const sut = makeSut()
      jest.spyOn(ProjectModel, 'create').mockImplementationOnce(throwRelationError)
      const promise = sut.create(mockCreateProjectDto())
      await expect(promise).rejects.toThrow()
      await expect(promise).rejects.toThrow(InvalidRelationError)
    })

    test('Should throw if ProjectModel throws database Error', async () => {
      const sut = makeSut()
      jest.spyOn(ProjectModel, 'create').mockImplementationOnce(throwDatabaseError)
      const promise = sut.create(mockCreateProjectDto())
      await expect(promise).rejects.toThrow()
      await expect(promise).rejects.toThrow(MissingParamError)
    })
  })
})
