import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../../common/baseDto/base.dto';

@ObjectType('User')
export class UserClassDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @Field()
  email: string;
}
