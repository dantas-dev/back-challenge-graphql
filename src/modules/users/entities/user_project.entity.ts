// user_room.model.ts
import {
  Table,
  Model,
  Column,
  ForeignKey,
  PrimaryKey,
} from 'sequelize-typescript';
import { ProjectEntity } from '../../projects/entities/project.entity';
import { UserEntity } from './user.entity';

@Table
class UserProjectEntity extends Model<UserProjectEntity> {
  @ForeignKey(() => UserEntity)
  @PrimaryKey
  @Column
  user_id: string;

  @ForeignKey(() => ProjectEntity)
  @PrimaryKey
  @Column
  project_id: string;
}

export default UserProjectEntity;
