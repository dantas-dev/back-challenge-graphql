import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { UserService } from './modules/users/user.service';

@Injectable()
export class AppService {
  constructor(private userService: UserService) {}

  @Timeout(100)
  async initDatabaseData() {
    await this.userService.createOne({
      name: 'Rafael',
      email: 'rafaael.figueiredo@gmail.com',
    });

    await this.userService.createOne({
      name: 'Rafael2',
      email: 'rafaael2.figueiredo@gmail.com',
    });
  }
}
