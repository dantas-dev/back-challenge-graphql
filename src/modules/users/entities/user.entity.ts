import { Column, Table } from 'sequelize-typescript';
import { BaseEntity } from '../../../common/baseEntity/base.entity';

@Table
export class UserEntity extends BaseEntity<UserEntity, Partial<UserEntity>> {
  @Column
  name: string;
}
