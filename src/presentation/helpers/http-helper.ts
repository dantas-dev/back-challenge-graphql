import { HttpResponse } from '@/presentation/protocols'
import { ServerError } from '@/presentation/errors'

export const badRequest = (error: Error): HttpResponse => ({
  code: 400,
  body: error
})

export const forbidden = (error: Error): HttpResponse => ({
  code: 403,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  code: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  code: 200,
  body: data
})

export const created = (data: any): HttpResponse => ({
  code: 201,
  body: data
})

export const noContent = (): HttpResponse => ({
  code: 204,
  body: null
})
