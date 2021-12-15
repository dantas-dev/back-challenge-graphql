import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserClassDTO } from './dtos/userClass.dto';
import { UserEntity } from './entities/user.entity';
import { CreateUserDTO } from './dtos/createUser.input';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async createOne(@Body() createUserInput: CreateUserDTO): Promise<UserEntity> {
    return await this.userService.createOne(createUserInput);
  }
}
