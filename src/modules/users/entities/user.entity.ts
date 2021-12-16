import {
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { BaseEntity } from '../../../common/baseEntity/base.entity';
import { ProjectEntity } from '../../projects/entities/project.entity';
import UserProjectEntity from './user_project.entity';

@Table
export class UserEntity extends BaseEntity<UserEntity, Partial<UserEntity>> {
  @Column
  name: string;

  @Column
  email: string;

  @BelongsToMany(() => ProjectEntity, () => UserProjectEntity)
  projects: ProjectEntity[];
}
