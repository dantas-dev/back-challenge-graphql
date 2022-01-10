import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDTO {
  @FilterableField()
  id!: string;

  @FilterableField()
  name!: string;

  @FilterableField()
  email!: string;
}
