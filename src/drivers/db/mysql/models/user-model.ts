import { CreateUserDto } from '@/application/usecases/dto/create-user-dto'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import { User } from '@/entities'
import { Table, Column, Model, Unique, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript'

@Table({
  tableName: 'users',
  timestamps: false
})
export default class UserModel extends Model<User, CreateUserDto> implements User {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: number

  @Column
  name: string

  @Column
  email: string

  @HasMany(() => ProjectModel)
  projects: ProjectModel
}
