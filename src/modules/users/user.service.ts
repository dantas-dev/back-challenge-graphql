import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { ConflictException, Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserDTO } from './dtos/createUser.input';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createOne(createUserInput: CreateUserDTO): Promise<UserEntity> {
    console.log('createUserInput: ' + createUserInput);
    const createdUser = await this.userRepository.createOne(createUserInput);

    if (!createdUser) {
      throw new ConflictException('User was not created');
    }

    return createdUser;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }
}
