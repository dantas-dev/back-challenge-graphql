import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../../common/baseDto/base.dto';

@ObjectType('Project')
export class ProjectClassDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  price: number;
}
