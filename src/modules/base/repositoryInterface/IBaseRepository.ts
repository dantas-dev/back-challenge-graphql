interface IBaseRepository {
  findAll(page?: number, perPage?: number, name?: string): Promise<any[]>;

  findById(id: string): Promise<any | undefined>;
}
