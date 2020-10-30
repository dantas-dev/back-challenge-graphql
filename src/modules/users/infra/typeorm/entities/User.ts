import { ObjectType, Field, Int } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
} from 'typeorm';

import Project from '@modules/projects/infra/typeorm/entities/Project';

@Entity('users')
@ObjectType()
export default class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  email: string;

  @OneToOne(() => Project)
  project?: Project;
}
