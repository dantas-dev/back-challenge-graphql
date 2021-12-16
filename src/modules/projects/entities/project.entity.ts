import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { BaseEntity } from '../../../common/baseEntity/base.entity';
import { UserEntity } from '../../users/entities/user.entity';
import UserProjectEntity from '../../users/entities/user_project.entity';

@Table
export class ProjectEntity extends BaseEntity<
  ProjectEntity,
  Partial<ProjectEntity>
> {
  @Column({
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.FLOAT,
  })
  price: number;

  // @ForeignKey(() => UserEntity)
  // @Column
  // projectID: string;

  // @BelongsTo(() => UserEntity)
  // user: UserEntity;

  @BelongsToMany(() => UserEntity, () => UserProjectEntity)
  users: UserEntity[];
}
