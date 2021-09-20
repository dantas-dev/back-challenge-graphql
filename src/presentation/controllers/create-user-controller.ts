import { CreateUser } from '@/application/protocols/usecases'
import { MissingParamError } from '@/presentation/errors'
import { badRequest, created, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class CreateUserController implements Controller {
  constructor (
    private readonly usecase: CreateUser
  ) {}

  async handle (req: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.usecase.create(req.body)
      return created(result)
    } catch (error) {
      if (error instanceof MissingParamError) {
        return badRequest(error)
      }
      return serverError(error)
    }
  }
}
