import { Field, ID, ObjectType } from "type-graphql";

import { IProject } from "../database/entities/Project";
import { IUser, User } from "../database/entities/User";

@ObjectType()
class ProjectSchema implements IProject {
  @Field((type) => ID, { nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field((type) => [User])
  user: User[];
}

export { ProjectSchema };
