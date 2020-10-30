import { ObjectType, Field, Int } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';

@ObjectType()
@Entity()
export default class Project extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field(() => User)
  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
