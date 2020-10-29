import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ObjectType, Field, Float, Int } from 'type-graphql';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('projects')
@ObjectType()
export default class Project extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Float)
  @Column()
  price: number;

  @Field(() => User)
  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
