import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../../common/baseDto/base.dto';

@ObjectType('User')
export class UserClassDTO extends BaseDTO {
  @FilterableField()
  name: String;

  @Field()
  email: String;
}
