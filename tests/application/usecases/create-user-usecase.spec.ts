import { CreateUserUseCase } from '@/application/usecases'
import { mockCreateUserDto } from '@/tests/application/mocks/mocks'
import { throwError } from '@/tests/application/mocks/test-helpers'
import { CreateUserRepositorySpy } from '@/tests/drivers/db/mysql/repositories/mocks/user-spy'

type SutTypes = {
  sut: CreateUserUseCase
  repository: CreateUserRepositorySpy
}

const makeSut = (): SutTypes => {
  const repository = new CreateUserRepositorySpy()
  const sut = new CreateUserUseCase(repository)
  return {
    sut,
    repository
  }
}

describe('CreateUserUsecase', () => {
  test('Should call CreateUserRepository with correct values', async () => {
    const { sut, repository } = makeSut()
    const data = mockCreateUserDto()
    await sut.create(data)
    expect(repository.input).toEqual(data)
  })

  test('Should throw if CreateUserRepository throws', async () => {
    const { sut, repository } = makeSut()
    jest.spyOn(repository, 'create').mockImplementationOnce(throwError)
    const promise = sut.create(mockCreateUserDto())
    await expect(promise).rejects.toThrow()
  })
})
