import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/user.entity';

export class UsersRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
}
