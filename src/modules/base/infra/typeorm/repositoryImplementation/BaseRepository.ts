import { Repository } from 'typeorm';

class BaseRepository {
  protected ormRepository: Repository<any> = {} as Repository<any>;

  public async findAll(
    page?: number,
    perPage?: number,
    name?: string,
  ): Promise<any[]> {
    if (name) {
      return this.ormRepository.find({ where: { name } });
    }
    if (page && perPage) {
      return this.ormRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
      });
    }
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<any | undefined> {
    return this.ormRepository.findOne({ where: { id } });
  }
}

export default BaseRepository;
