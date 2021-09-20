import { GetProjectsUseCase } from '@/application/usecases'
import { throwError } from '@/tests/application/mocks/test-helpers'
import { GetProjectsRepositorySpy } from '@/tests/drivers/db/mysql/repositories/mocks/project-spy'

type SutTypes = {
  sut: GetProjectsUseCase
  repository: GetProjectsRepositorySpy
}

const makeSut = (): SutTypes => {
  const repository = new GetProjectsRepositorySpy()
  const sut = new GetProjectsUseCase(repository)
  return {
    sut,
    repository
  }
}

describe('GetProjectsUsecase', () => {
  test('Should GetProjectsRepository return a list of projects', async () => {
    const { sut, repository } = makeSut()
    await sut.getAll()
    expect(repository.result).toBeTruthy()
  })

  test('Should throw if GetProjectsRepository throws', async () => {
    const { sut, repository } = makeSut()
    jest.spyOn(repository, 'getAll').mockImplementationOnce(throwError)
    const promise = sut.getAll()
    await expect(promise).rejects.toThrow()
  })
})
