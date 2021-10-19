import { Column, Model, Table } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
@Table({
  modelName: 'users',
})
@ObjectType()
export class User extends Model<User> {
  @Field()
  id: number;

  @Column
  @Field()
  name: string;

  @Column
  @Field()
  email: string;
}