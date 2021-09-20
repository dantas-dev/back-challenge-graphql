import { CreateProjectDto } from '@/application/usecases'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { Project } from '@/entities'
import { Table, Column, Model, Unique, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript'

@Table({
  tableName: 'projects',
  timestamps: false
})
export default class ProjectModel extends Model<Project, CreateProjectDto> {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: number

  @Column
  name: string

  @Column
  price: number

  @ForeignKey(() => UserModel)
  @Column
  userId: number

  @BelongsTo(() => UserModel)
  user: UserModel
}

// ProjectModel.init({
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   price: {
//     type: DataTypes.FLOAT,
//     allowNull: false
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   }
// },
// {
//   sequelize: MysqlConnection.connection,
//   tableName: 'projects',
//   timestamps: false
// })
