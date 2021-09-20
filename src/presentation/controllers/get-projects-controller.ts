import { GetProjects } from '@/application/protocols/usecases'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class GetProjectsController implements Controller {
  constructor (
    private readonly usecase: GetProjects
  ) { }

  async handle (_req: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.usecase.getAll()
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
