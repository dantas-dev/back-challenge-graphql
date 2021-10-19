import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}