import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    throw new Error('Method not implemented.');
  }
}
