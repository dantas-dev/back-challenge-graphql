import { ObjectType, Field, Float, Int } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { IsInt, IsDecimal, Length } from 'class-validator';

import User from '@modules/users/infra/typeorm/entities/User';

@ObjectType()
@Entity('projects')
export default class Project {
  @Field(() => Int)
  @IsInt()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String)
  @Length(3, 50)
  @Column()
  name: string;

  @Field(() => Float)
  @Column()
  @IsDecimal()
  price: number;

  @Field(() => Int)
  @Column()
  @IsInt()
  user_id: number;

  @Field(() => User)
  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
