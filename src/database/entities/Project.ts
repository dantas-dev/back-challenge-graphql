import { Field, Float, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { IUser, User } from "./User";

export interface IProject {
  id?: string;

  name: string;

  price: number;

  user_id: string;
}

@ObjectType()
@Entity("projects")
class Project implements IProject {
  @PrimaryColumn()
  @Field((type) => ID, { nullable: true })
  id: string;

  @Field((type) => String)
  @Column()
  name: string;

  @Field((type) => Float)
  @Column()
  price: number;

  @Field((type) => String)
  @Column()
  user_id: string;

  @Field((type) => User)
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Project };
