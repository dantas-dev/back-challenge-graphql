import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseEntity } from '../../../common/baseEntity/base.entity';

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
}
