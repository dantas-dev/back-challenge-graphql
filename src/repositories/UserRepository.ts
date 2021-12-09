import { User, OrderBy } from '../types';

export interface CreateParameters {
  name: string;
  email: string;
}

export interface FindParameters {
  first: number;
  after?: number;
  name?: string;
  email?: string;
  orderBy?: OrderBy[];
}

export interface CountParameters {
  name?: string;
  email?: string;
}

export default interface UserRepository {
  get(id: number): Promise<User>;

  getMany(ids: number[]): Promise<User[]>;

  create(params: CreateParameters): Promise<User>;

  update(id: number, name: string, email: string): Promise<User>;

  find(params: FindParameters): Promise<User[]>;

  count(params: CountParameters): Promise<number>;

  delete(id: number): Promise<User>;
}
