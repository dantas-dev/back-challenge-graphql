import { Field, Float, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateProjectDTO {
  @Field()
  @IsString()
  name: string;

  @Field((type) => Float)
  @IsNumber()
  price: number;
}
