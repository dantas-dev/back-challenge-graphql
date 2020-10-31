import { Field, Float, InputType, Int } from 'type-graphql';

@InputType()
export default class ProjectInput {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  user_id: number;
}
