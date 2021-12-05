// Used DTO pattern to reference a universal User type object across the system components.

import IBaseDTO from '@modules/base/dto/IBaseDTO';

interface IUserDTO extends IBaseDTO {
  email: string;
}

export default IUserDTO;
