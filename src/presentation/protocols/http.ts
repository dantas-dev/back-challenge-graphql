export interface HttpResponse<T = any> {
  code: number
  body: T
  headers?: Record<string, string | number | string[]>
}

export interface HttpRequest {
  body?: any
  params?: any
  query?: any
  headers?: any
}
