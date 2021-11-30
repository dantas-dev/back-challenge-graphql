import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/users.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  create(createUserInput: CreateUserInput): Promise<User> {
    return this.usersRepository.create(createUserInput);
  }

  findOneById(id: number) {
    console.log(id);
    
    return this.usersRepository.findOneById(id);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }
}
