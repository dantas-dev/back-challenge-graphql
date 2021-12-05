// Used DTO pattern to reference a universal Project type object across the system components.

import IBaseDTO from '@modules/base/dto/IBaseDTO';
import IUserDTO from '@modules/users/dto/IUserDTO';

interface IProjectDTO extends IBaseDTO {
  userId?: string;
  price: number;
  user?: IUserDTO;
}

export default IProjectDTO;
