import {Project, OrderBy} from '../types';

export interface CreateParameters {
  name: string;
  price: number;
  userId: number;
}

export interface FindParameters {
  first: number;
  after?: number;
  userId?: number;
  query?: string;
  name?: string;
  price?: number;
  orderBy?: OrderBy[];
}

export interface CountParameters {
  name?: string;
  price?: number;
  userId?: number;
  query?: string;
}

export default interface ProjectRepository {
  get(id: number): Promise<Project>;

  getMany(ids: number[]): Promise<Project[]>;

  create(params: CreateParameters): Promise<Project>;

  update(id: number, name: string, price: number): Promise<Project>;

  find(params: FindParameters): Promise<Project[]>;

  count(params: CountParameters): Promise<number>;

  delete(id: number): Promise<Project>;
}
