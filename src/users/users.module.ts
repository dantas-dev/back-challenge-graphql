import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
