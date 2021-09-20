import { Connection } from '@/drivers/db/mysql/helpers/connection'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { DbGetUsersRepository } from '@/drivers/db/mysql/repositories'
import { mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { Op } from 'sequelize'

const makeSut = (): DbGetUsersRepository => {
  return new DbGetUsersRepository()
}

describe('GetUsersRepository', () => {
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

  describe('getAll()', () => {
    test('Should return a list of users on success', async () => {
      const sut = makeSut()
      await UserModel.create(mockCreateUserDto())
      const users = await sut.getAll()
      expect(users).toBeTruthy()
    })

    test('Should not throw when there is no users', async () => {
      const sut = makeSut()
      const users = await sut.getAll()
      expect(users).toBeTruthy()
      expect(users).toStrictEqual([])
    })
  })
})
