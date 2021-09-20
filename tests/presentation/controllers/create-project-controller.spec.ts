import { Connection } from '@/drivers/db/mysql/helpers/connection'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { CreateProjectController } from '@/presentation/controllers'
import { InvalidRelationError, MissingParamError } from '@/presentation/errors'
import { badRequest, created, serverError } from '@/presentation/helpers'
import { HttpRequest, HttpResponse } from '@/presentation/protocols'
import { mockCreateProjectDto, mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { CreateProjectUseCaseSpy } from '@/tests/application/mocks/project-spy'
import { throwError, throwInvalidRelationError, throwMissingParamError } from '@/tests/application/mocks/test-helpers'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'
import { Op } from 'sequelize'

const mockRequest = (userId: number): HttpRequest => ({
  body: mockCreateProjectDto(userId)
})

type SutTypes = {
  sut: CreateProjectController
  usecase: CreateProjectUseCaseSpy
}

const makeSut = (): SutTypes => {
  const usecase = new CreateProjectUseCaseSpy()
  const sut = new CreateProjectController(usecase)
  return {
    sut,
    usecase
  }
}

describe('CreateProject Controller', () => {
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

  test('Should call Usecase with correct values', async () => {
    const { sut, usecase } = makeSut()
    const user = await UserModel.create(mockCreateUserDto())
    const request = mockRequest(user.id)
    await sut.handle(request)
    expect(usecase.input.id).toBe(request.body.id)
  })
  test('Should return 201 on success', async () => {
    const { sut, usecase } = makeSut()
    const user = await UserModel.create(mockCreateUserDto())
    const httpResponse: HttpResponse = await sut.handle(mockRequest(user.id))
    expect(httpResponse).toEqual(created(usecase.result))
  })

  test('Should return 400 on usecase throws', async () => {
    const { sut, usecase } = makeSut()
    jest.spyOn(usecase, 'create').mockImplementationOnce(throwInvalidRelationError)
    const httpResponse = await sut.handle(mockRequest(1))
    expect(httpResponse).toEqual(badRequest(new InvalidRelationError()))
  })

  test('Should return 400 on usecase throws', async () => {
    const { sut, usecase } = makeSut()
    jest.spyOn(usecase, 'create').mockImplementationOnce(throwMissingParamError)
    const httpResponse = await sut.handle(mockRequest(1))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('')))
  })

  test('Should return 500 on server error', async () => {
    const { sut, usecase } = makeSut()
    jest.spyOn(usecase, 'create').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest(1))
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
