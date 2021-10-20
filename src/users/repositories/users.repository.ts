import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../entities/user.entity';
@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.userModel.create(createUserInput);
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
