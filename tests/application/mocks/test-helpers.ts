import { InvalidRelationError, MissingParamError } from '@/presentation/errors'
import { DatabaseError, ForeignKeyConstraintError } from 'sequelize'

export const throwError = (): never => {
  throw new Error()
}

export const throwRelationError = (): never => {
  throw new ForeignKeyConstraintError({})
}

export const throwDatabaseError = (): never => {
  throw new DatabaseError(new Error())
}

export const throwInvalidRelationError = (): never => {
  throw new InvalidRelationError()
}

export const throwMissingParamError = (): never => {
  throw new MissingParamError('')
}
