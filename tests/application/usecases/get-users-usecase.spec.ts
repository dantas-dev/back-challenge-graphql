import { GetUsersUseCase } from '@/application/usecases'
import { throwError } from '@/tests/application/mocks/test-helpers'
import { GetUsersRepositorySpy } from '@/tests/drivers/db/mysql/repositories/mocks/user-spy'

type SutTypes = {
  sut: GetUsersUseCase
  repository: GetUsersRepositorySpy
}

const makeSut = (): SutTypes => {
  const repository = new GetUsersRepositorySpy()
  const sut = new GetUsersUseCase(repository)
  return {
    sut,
    repository
  }
}

describe('GetUsersUsecase', () => {
  test('Should GetUsersRepository return a list of users', async () => {
    const { sut, repository } = makeSut()
    await sut.getAll()
    expect(repository.result).toBeTruthy()
  })

  test('Should throw if GetUsersRepository throws', async () => {
    const { sut, repository } = makeSut()
    jest.spyOn(repository, 'getAll').mockImplementationOnce(throwError)
    const promise = sut.getAll()
    await expect(promise).rejects.toThrow()
  })
})
