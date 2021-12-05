import IUserDTO from '../dto/IUserDTO';

interface IUsersRepository extends IBaseRepository {
  create(name: string, email: string): Promise<IUserDTO>;

  findUserbyEmail(email: string): Promise<IUserDTO | undefined>;
}

export default IUsersRepository;
