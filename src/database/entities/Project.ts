import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
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

  @Field((type) => String)
  @Column()
  price: number;

  @Field((type) => String)
  @ManyToOne(() => User, (user) => user.id)
  @Column()
  user_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Project };
