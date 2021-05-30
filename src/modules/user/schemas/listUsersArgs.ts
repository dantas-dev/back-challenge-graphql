/* eslint-disable @typescript-eslint/no-unused-vars */
import { Max, Min } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
class ListUsersArgs {
  @Field((type) => Int, { defaultValue: 0 })
  @Min(0)
  skip: number;

  @Field((type) => Int)
  @Min(1)
  @Max(50)
  take = 25;

  @Field({ nullable: true })
  name?: string;

  get startIndex(): number {
    return this.skip;
  }

  get endIndex(): number {
    return this.skip + this.take;
  }
}

export { ListUsersArgs };
