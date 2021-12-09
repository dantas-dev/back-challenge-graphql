import UserRepository, { CreateParameters, FindParameters, CountParameters } from './UserRepository';
import database from '../database';
import { User } from '../types';

export default class UserKnexRepository implements UserRepository {
  public async get(id: number): Promise<User> {
    return database.select()
      .from('user')
      .where('id', id)
      .first();
  }

  public async getMany(ids: number[]): Promise<User[]> {
    return database.select()
      .from('user')
      .whereIn('id', ids);
  }

  public async find(params: FindParameters): Promise<User[]> {
    const { first, after, name, email, orderBy } = params;

    return database.select()
      .from('user')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof name !== 'undefined' && name !== null) {
          queryBuilder.where('name', 'like', `%${name}%`);
        }

        if (typeof email !== 'undefined' && email !== null) {
          queryBuilder.where('email', 'like', `%${email}%`);
        }

        if (Array.isArray(orderBy)) {
          orderBy.forEach(ob => queryBuilder.orderBy(ob.field, ob.direction));
        }
      })
      .limit(first);
  }

  public async count(params: CountParameters): Promise<number> {
    const { name, email } = params;

    return database.count({ count: '*' })
      .from('user')
      .modify((queryBuilder) => {
        if (typeof name !== 'undefined' && name !== null) {
          queryBuilder.where('name', 'like', `%${name}%`);
        }

        if (typeof email !== 'undefined' && email !== null) {
          queryBuilder.where('email', 'like', `%${email}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async create(params: CreateParameters): Promise<User> {
    return database.insert({
        name: params.name,
        email: params.email,
      })
      .into('user')
      .then(ids => {
        return this.get(ids[0]);
      });
  }

  public async update(id: number, name: string, email: string): Promise<User> {
    return database.table('user')
      .where('id', id)
      .modify((queryBuilder) => {
        if (typeof name !== 'undefined' && name !== null) {
          queryBuilder.update('name', name);
        }

        if (typeof email !== 'undefined' && email !== null) {
          queryBuilder.update('email', email);
        }
      })
      .then(updatedRows => {
        if (updatedRows.length === 0) {
          throw new Error('User not found!');
        }
        return updatedRows;
      }).then(() => {
        return this.get(id);
      });
  }

  public async delete(id: number): Promise<User> {
    const user = await this.get(id);

    await database.table('user').where('id', id).del();

    return user;
  }
}
