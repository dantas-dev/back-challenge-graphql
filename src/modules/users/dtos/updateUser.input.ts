import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateUserDTO } from './createUser.input';

@InputType()
export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
