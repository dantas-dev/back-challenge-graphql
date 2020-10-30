import { Field, InputType, Int } from 'type-graphql';

@InputType()
export default class ProjectInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  user_id: number;
}
