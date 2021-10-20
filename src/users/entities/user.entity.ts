import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
import { Project } from '../../projects/entities/project.entity';
@Table({
  modelName: 'users',
})
@ObjectType()
export class User extends Model {
  @Field()
  id: number;

  @Column
  @Field()
  name: string;

  @Column
  @Field()
  email: string;

  @HasMany(() => Project)
  projects: Project[];
}
