import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../../common/baseDto/base.dto';
import { ProjectClassDTO } from '../../projects/dtos/projectClass.dto';

@ObjectType('User')
@FilterableOffsetConnection('projects', () => ProjectClassDTO, {
  nullable: true,
})
export class UserClassDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @Field()
  email: string;
}
