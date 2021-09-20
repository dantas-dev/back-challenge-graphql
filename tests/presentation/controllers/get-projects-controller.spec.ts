import { Connection } from '@/drivers/db/mysql/helpers/connection'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { GetProjectsController } from '@/presentation/controllers'
import { serverError } from '@/presentation/helpers'
import { GetProjectsUseCaseSpy } from '@/tests/application/mocks/project-spy'
import { throwError } from '@/tests/application/mocks/test-helpers'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { ok } from '@/presentation/helpers/http-helper'
import { Op } from 'sequelize'

type SutTypes = {
  sut: GetProjectsController
  usecase: GetProjectsUseCaseSpy
}

const makeSut = (): SutTypes => {
  const usecase = new GetProjectsUseCaseSpy()
  const sut = new GetProjectsController(usecase)
  return {
    sut,
    usecase
  }
}

describe('GetProjects Controller', () => {
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
    await UserModel.destroy({ where: { id: { [Op.not]: null } } })
  })

  test('Should return 200 on success', async () => {
    const { sut, usecase } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(ok(usecase.result))
  })

  test('Should return 500 on server error', async () => {
    const { sut, usecase } = makeSut()
    jest.spyOn(usecase, 'getAll').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
