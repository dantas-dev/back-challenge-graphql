import { Field, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}

export { User };
