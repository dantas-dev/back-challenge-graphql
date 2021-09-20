import { Controller, HttpRequest } from '@/presentation/protocols'

import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.code >= 200 && httpResponse.code <= 499) {
      return res.status(httpResponse.code).json(httpResponse.body)
    } else {
      return res.status(httpResponse.code).json({
        error: httpResponse.body.name,
        message: httpResponse.body.message
      })
    }
  }
}
