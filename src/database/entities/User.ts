import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { IProject, Project } from "./Project";

export interface IUser {
  id?: string;
  name: string;
  email: string;
  projects?: IProject;
}

@ObjectType()
@Entity("users")
class User implements IUser {
  @Field((type) => ID, { nullable: true })
  @PrimaryColumn()
  id: string;

  @Field((type) => String)
  @Column()
  name: string;

  @Field((type) => String)
  @Column()
  email: string;

  @Field((type) => [Project], { nullable: true })
  @JoinColumn()
  @OneToMany(() => Project, (project) => project.id)
  projects?: Project;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
