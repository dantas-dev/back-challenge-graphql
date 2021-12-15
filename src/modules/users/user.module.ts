import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { UserClassDTO } from './dtos/userClass.dto';
import { UserEntity } from './entities/user.entity';
import { CreateUserDTO } from './dtos/createUser.input';
import { UpdateUserDTO } from './dtos/updateUser.input';
import { UserRepository } from './repositories/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([UserEntity])],
      resolvers: [
        {
          DTOClass: UserClassDTO,
          EntityClass: UserEntity,
          CreateDTOClass: CreateUserDTO,
          UpdateDTOClass: UpdateUserDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
