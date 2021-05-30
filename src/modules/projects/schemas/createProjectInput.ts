import { Field, InputType } from "type-graphql";

import { Project } from "./projects";

@InputType()
class CreateProjectInput implements Partial<Project> {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  userId: string;
}

export { CreateProjectInput };
