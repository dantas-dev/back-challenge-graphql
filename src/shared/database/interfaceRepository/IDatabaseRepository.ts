interface IDatabaseRepository {
  startDatabase(): Promise<void>;
}

export default IDatabaseRepository;
