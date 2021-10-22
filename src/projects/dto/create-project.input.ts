import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateProjectInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsInt()
  @IsNotEmpty()
  userId: number;
}
