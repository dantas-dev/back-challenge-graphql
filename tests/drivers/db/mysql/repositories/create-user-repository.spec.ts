import { Connection } from '@/drivers/db/mysql/helpers/connection'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { DbCreateUserRepository } from '@/drivers/db/mysql/repositories'
import { MissingParamError } from '@/presentation/errors'
import { mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { throwDatabaseError } from '@/tests/application/mocks/test-helpers'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { Op } from 'sequelize'

const makeSut = (): DbCreateUserRepository => {
  return new DbCreateUserRepository()
}

describe('CreateUserRepository', () => {
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

  describe('create()', () => {
    test('Should return a user on success', async () => {
      const sut = makeSut()
      const mocked = mockCreateUserDto()
      const created = await sut.create(mocked)
      expect(created).toBeTruthy()
    })
  })

  test('Should throw if UserModel throws database Error', async () => {
    const sut = makeSut()
    jest.spyOn(UserModel, 'create').mockImplementationOnce(throwDatabaseError)
    const promise = sut.create(mockCreateUserDto())
    await expect(promise).rejects.toThrow()
    await expect(promise).rejects.toThrow(MissingParamError)
    await expect(promise).rejects.toBeInstanceOf(MissingParamError)
  })
})
