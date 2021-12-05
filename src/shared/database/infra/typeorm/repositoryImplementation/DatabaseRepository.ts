import { Connection, createConnection } from 'typeorm';

import IDatabaseRepository from '@shared/database/interfaceRepository/IDatabaseRepository';
import { singleton } from 'tsyringe';

@singleton()
class DatabaseRepository implements IDatabaseRepository {
  public async startDatabase(): Promise<void> {
    await createConnection();
  }
}

export default DatabaseRepository;
