import { Field, InputType, Int } from 'type-graphql';

@InputType()
export default class ProjectInputByName {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field(() => Int, { nullable: true })
  page?: number;
}
