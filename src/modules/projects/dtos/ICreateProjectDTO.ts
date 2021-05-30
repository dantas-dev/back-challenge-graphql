import { User } from "../../user/entities/User";

interface ICreateProjectDTO {
  name: string;
  price: string;
  user: User;
}

export { ICreateProjectDTO };
