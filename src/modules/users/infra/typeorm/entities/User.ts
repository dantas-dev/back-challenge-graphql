import { ObjectType, Field, Int } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
} from 'typeorm';
import { IsInt, Length } from 'class-validator';

import Project from '@modules/projects/infra/typeorm/entities/Project';

@Entity('users')
@ObjectType()
export default class User extends BaseEntity {
  @Field(() => Int)
  @IsInt()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String)
  @Length(3, 50)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  @Length(9, 50)
  email: string;

  @OneToOne(() => Project)
  project?: Project;
}
