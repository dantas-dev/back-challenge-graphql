import { Connection } from '@/drivers/db/mysql/helpers/connection'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { CreateUserController } from '@/presentation/controllers'
import { MissingParamError } from '@/presentation/errors'
import { badRequest, created, serverError } from '@/presentation/helpers'
import { HttpRequest, HttpResponse } from '@/presentation/protocols'
import { mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { CreateUserUseCaseSpy } from '@/tests/application/mocks/user-spy'
import { throwError, throwMissingParamError } from '@/tests/application/mocks/test-helpers'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { Op } from 'sequelize'

const mockRequest = (): HttpRequest => ({
  body: mockCreateUserDto()
})

type SutTypes = {
  sut: CreateUserController
  usecase: CreateUserUseCaseSpy
}

const makeSut = (): SutTypes => {
  const usecase = new CreateUserUseCaseSpy()
  const sut = new CreateUserController(usecase)
  return {
    sut,
    usecase
  }
}

describe('CreateUser Controller', () => {
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
    await UserModel.destroy({ where: { id: { [Op.not]: null } } })
  })

  test('Should call Usecase with correct values', async () => {
    const { sut, usecase } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(usecase.input.id).toBe(request.body.id)
  })
  test('Should return 201 on success', async () => {
    const { sut, usecase } = makeSut()
    const httpResponse: HttpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(created(usecase.result))
  })

  test('Should return 400 on usecase throws', async () => {
    const { sut, usecase } = makeSut()
    jest.spyOn(usecase, 'create').mockImplementationOnce(throwMissingParamError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new MissingParamError('')))
  })

  test('Should return 500 on server error', async () => {
    const { sut, usecase } = makeSut()
    jest.spyOn(usecase, 'create').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
