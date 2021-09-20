export class ServerError extends Error {
  constructor (stack: string) {
    super('Internal server error')
    this.name = 'ServerError'
    this.message = 'Please contact system administrator'
    this.stack = stack
  }
}
