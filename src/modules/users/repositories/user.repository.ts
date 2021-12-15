import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDTO } from '../dtos/createUser.input';

@Injectable()
export class UserRepository {
  constructor(
    @InjectQueryService(UserEntity) readonly service: QueryService<UserEntity>,
  ) {}

  async createOne(createUserInput: CreateUserDTO) {
    return await this.service.createOne(createUserInput);
  }

  async findAll() {
    return await this.service.query({});
  }
}
