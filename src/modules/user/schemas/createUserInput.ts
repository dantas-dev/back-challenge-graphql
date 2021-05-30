import { Field, InputType } from "type-graphql";

import { User } from "./user";

@InputType()
class CreateUserInput implements Partial<User> {
  @Field()
  name: string;

  @Field()
  email: string;
}

export { CreateUserInput };
