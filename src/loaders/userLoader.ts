import DataLoader from 'dataloader';
import UserRepository from '../repositories/UserKnexRepository';
import {User} from '../types';

async function getUsersById(ids: number[]): Promise<User[]> {
  const userRepository = new UserRepository();
  const users = await userRepository.getMany(ids);
  return ids.map((id) => {
    return users.find((user) => user.id === id);
  });
}

export default new DataLoader(getUsersById);
