import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateUserDTO {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;
}
