import { User } from '../users/entities/user.entity';

export class TestUtils {
  static getAValidUser(): User {
    return new User();
  }
}
