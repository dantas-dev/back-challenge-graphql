import { User } from '../users/entities/user.entity';

export class TestUtils {
  static getAValidUser(): User {
    const user = new User();
    user.id = 1;
    user.name = 'Uigor Marshall';
    user.email = 'uigor@marshall.com';
    return user;
  }
}
