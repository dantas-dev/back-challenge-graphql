import { CreateProjectUseCase } from '@/application/usecases'
import { mockCreateProjectDto } from '@/tests/application/mocks/mocks'
import { throwError } from '@/tests/application/mocks/test-helpers'
import { CreateProjectRepositorySpy } from '@/tests/drivers/db/mysql/repositories/mocks/project-spy'

type SutTypes = {
  sut: CreateProjectUseCase
  repository: CreateProjectRepositorySpy
}

const makeSut = (): SutTypes => {
  const repository = new CreateProjectRepositorySpy()
  const sut = new CreateProjectUseCase(repository)
  return {
    sut,
    repository
  }
}

describe('CreateUserUsecase', () => {
  test('Should call CreateUserRepository with correct values', async () => {
    const { sut, repository } = makeSut()
    const data = mockCreateProjectDto()
    await sut.create(data)
    expect(repository.input).toEqual(data)
  })

  test('Should throw if CreateUserRepository throws', async () => {
    const { sut, repository } = makeSut()
    jest.spyOn(repository, 'create').mockImplementationOnce(throwError)
    const promise = sut.create(mockCreateProjectDto())
    await expect(promise).rejects.toThrow()
  })
})
