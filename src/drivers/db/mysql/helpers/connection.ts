import ProjectModel from '@/drivers/db/mysql/models/project-model'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { Sequelize } from 'sequelize-typescript'

export class Connection {
  private static instance?: Connection
  public connection?: Sequelize

  private constructor () {}

  static getInstance (): Connection {
    if (Connection.instance === undefined) Connection.instance = new Connection()
    return Connection.instance
  }

  static getConnection (): Sequelize {
    if (Connection.instance === undefined) Connection.getInstance()
    return Connection.instance.connection
  }

  async connect (): Promise<void> {
    let connected: boolean
    try {
      await this.connection.authenticate()
      connected = true
    } catch (error) {
      connected = false
    }
    this.connection = connected
      ? this.connection
      : new Sequelize({
        host: process.env.MYSQL_HOSTNAME,
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        dialect: 'mysql',
        define: { engine: 'INNODB' },
        omitNull: true,
        logging: false,
        modelPaths: [__dirname + '../models'],
        modelMatch: (filename, member) => {
          return filename.substring(0, filename.indexOf('-model')) === member.toLowerCase()
        }
      })
    this.connection.addModels([UserModel, ProjectModel])
  }

  async disconnect (): Promise<void> {
    // if (this.connection === undefined) throw new ConnectionNotFoundError()
    await Connection.getConnection().close()
    // this.query = undefined
    // this.connection = undefined
  }
}
