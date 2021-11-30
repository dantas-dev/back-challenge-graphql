import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/users.entity';
import { UsersRepository } from './repositories/users.repository';

@Module({
  imports:[SequelizeModule.forFeature([User])],
  exports: [SequelizeModule],
  providers: [UsersService, UsersResolver, UsersRepository]
})
export class UsersModule {}
