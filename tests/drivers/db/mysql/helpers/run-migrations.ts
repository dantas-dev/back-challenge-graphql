import { Connection } from '@/drivers/db/mysql/helpers/connection'
import 'dotenv/config'
import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import Umzug, { Migration, UmzugOptions } from 'umzug'

const baseDir = __dirname

export const getOpts = async (): Promise<UmzugOptions> => {
  await Connection.getInstance().connect()
  const sequelize = Connection.getInstance().connection
  const options: UmzugOptions = {
    storage: 'sequelize',
    storageOptions: { sequelize: sequelize },
    migrations: {
      params: [
        sequelize.getQueryInterface(),
        Sequelize
      ],
      path: path.join(baseDir, '../../../../../src/drivers/db/mysql/migrations')
    }
  }

  return options
}

export const migrationsUp = async (): Promise<Migration[]> => {
  const umzug = new Umzug(await getOpts())

  return await umzug.up()
}

export const migrationsDown = async (): Promise<Migration[]> => {
  const umzug = new Umzug(await getOpts())

  return await umzug.down({ to: 0 })
}
