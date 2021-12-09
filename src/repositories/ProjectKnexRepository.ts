import ProjectRepository, { FindParameters, CountParameters } from './ProjectRepository';
import database from '../database';
import {Project} from '../types';
import {CreateParameters} from './ProjectRepository';

export default class ProjectKnexRepository implements ProjectRepository {

  public async get(id: number): Promise<Project> {
    return database.select()
      .from('project')
      .where('id', id)
      .first();
  }

  public async getMany(ids: number[]): Promise<Project[]> {
    return database.select()
      .from('project')
      .whereIn('id', ids);
  }

  public async find(params: FindParameters): Promise<Project[]> {
    const { first, after, name, price, userId, orderBy } = params;

    return database.select()
      .from('project')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof name !== 'undefined' && name !== null) {
          queryBuilder.where('name', 'like', `%${name}%`);
        }

        if (typeof price !== 'undefined' && price !== null) {
          queryBuilder.where('price', price);
        }

        if (typeof userId !== 'undefined' && userId !== null) {
          queryBuilder.where('userId', userId);
        }

        if (Array.isArray(orderBy)) {
          orderBy.forEach(ob => queryBuilder.orderBy(ob.field, ob.direction));
        }
      })
      .limit(first);
  }

  public async count(params: CountParameters): Promise<number> {
    const { userId, name, price } = params;

    return database.count({ count: '*' })
      .from('project')
      .modify((queryBuilder) => {
        if (typeof userId !== 'undefined' && userId !== null) {
          queryBuilder.where('userId', userId);
        }

        if (typeof name !== 'undefined' && name !== null) {
          queryBuilder.where('name', 'like', `%${name}%`);
        }

        if (typeof price !== 'undefined' && price !== null) {
          queryBuilder.where('price', price);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async create(params: CreateParameters): Promise<Project> {
    return database.insert({
        name: params.name,
        price: params.price,
        userId: params.userId,
      })
      .into('project')
      .then(ids => {
        return this.get(ids[0]);
      });
  }

  public async update(id: number, name: string, price: number): Promise<Project> {
    return database.table('project')
      .where('id', id)
      .modify((queryBuilder) => {
        if (typeof name !== 'undefined' && name !== null) {
          queryBuilder.update('name', name);
        }

        if (typeof price !== 'undefined' && price !== null) {
          queryBuilder.update('price', price);
        }
      })
      .then(updatedRows => {
        if (updatedRows.length === 0) {
          throw new Error('Project not found!');
        }
        return updatedRows;
      }).then(() => {
        return this.get(id);
      });
  }

  public async delete(id: number): Promise<Project> {
    const project = await this.get(id);

    await database.table('project').where('id', id).del();

    return project;
  }
}
