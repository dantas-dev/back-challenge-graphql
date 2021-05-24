import { Field, ID, ObjectType } from "type-graphql";

import { IUser } from "../database/entities/User";

@ObjectType()
class UserSchema implements IUser {
  @Field((type) => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;
}

export { UserSchema };
