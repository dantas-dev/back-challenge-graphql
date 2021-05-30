import { User } from "../../user/entities/User";

interface ICreateProjectDTO {
  name: string;
  price: number;
  user: User;
  deadline: Date;
}

export { ICreateProjectDTO };
