import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateProjectDTO } from './createProject.dto';

@InputType()
export class UpdateProjectDTO extends PartialType(CreateProjectDTO) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
