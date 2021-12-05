import IProjectDTO from '../dto/IProjectDTO';

interface IProjectsRepository extends IBaseRepository {
  create(userId: string, name: string, price: number): Promise<IProjectDTO>;
}

export default IProjectsRepository;
