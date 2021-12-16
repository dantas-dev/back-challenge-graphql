import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../../common/baseDto/base.dto';
import { UserClassDTO } from '../../users/dtos/userClass.dto';

@ObjectType('Project')
@FilterableOffsetConnection('users', () => UserClassDTO, {
  nullable: true,
})
export class ProjectClassDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  price: number;
}
