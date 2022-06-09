import { Roles } from 'core/entities/User';

export interface IUserCreateDTO {
  email: string;
  role: Roles;
}

export interface IUserConfirmFirstAccesDoneDTO {
  oldPassword: {
    password: string;
    buffer: Buffer;
  };
  newPassword: {
    password: string;
    buffer: Buffer;
  };
  token: string;
  name: string;
  termsOfUse: boolean;
}
