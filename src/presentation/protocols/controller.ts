import { HttpResponse, HttpRequest } from '@/presentation/protocols'

export abstract class Controller {
  handle: (req: HttpRequest) => Promise<HttpResponse>
}
