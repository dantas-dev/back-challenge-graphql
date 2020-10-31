import { Field, InputType, Int } from 'type-graphql';

@InputType()
export default class ProjectInputById {
  @Field(() => Int)
  id: number;
}
