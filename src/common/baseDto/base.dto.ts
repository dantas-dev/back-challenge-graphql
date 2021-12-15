import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @IDField(() => ID)
  id!: string;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  deletedAt!: Date;
}
