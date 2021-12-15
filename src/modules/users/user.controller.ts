import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from './dtos/user.dto';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './inputs/createUser.input';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async createOne(
    @Body() createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createOne(createUserInput);
  }
}
