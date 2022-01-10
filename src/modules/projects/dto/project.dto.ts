import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserDTO } from 'src/modules/users/dto/user.dto';

@ObjectType('Project')
@FilterableRelation('user', () => UserDTO)
export class ProjectDTO {
  @FilterableField()
  id!: string;

  @FilterableField()
  name!: string;

  @FilterableField()
  price!: number;

  @FilterableField()
  user!: string
}
