export class InvalidRelationError extends Error {
  constructor () {
    super('Invalid database relation error')
    this.name = 'InvalidRelationError'
    this.message = 'Invalid database relation error'
  }
}
