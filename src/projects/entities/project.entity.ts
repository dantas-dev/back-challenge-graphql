import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@Table({
  modelName: 'projects',
})
@ObjectType()
export class Project extends Model {
  @Field()
  id: number;

  @Column
  @Field()
  name: string;

  @Column
  @Field()
  email: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  @Field((type) => User)
  user: User;
}
