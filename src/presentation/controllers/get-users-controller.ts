import { GetUsers } from '@/application/protocols/usecases'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class GetUsersController implements Controller {
  constructor (
    private readonly usecase: GetUsers
  ) { }

  async handle (_req: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.usecase.getAll()
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
