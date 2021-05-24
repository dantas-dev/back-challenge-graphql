import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export interface IUser {
  id?: string;
  name: string;
  email: string;
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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
