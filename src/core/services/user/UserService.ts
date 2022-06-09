import User from 'core/entities/User';
import { encrypt } from 'core/utils/crypto';
import { IUserRepository } from 'infra/db/IUserRepository';

import {
  ResponseController,
  ok,
  conflict,
} from '../../controllers/ResponseController';
import { IUserCreateDTO } from './IUserServiceDTO';

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async create(data: IUserCreateDTO): Promise<ResponseController> {
    const userExists = await this.userRepository.exists(data.email);

    if (userExists) {
      return conflict(new Error('User email already exists.'));
    }

    const user = await this.userRepository.create(
      new User({
        ...data,
        password: encrypt('123456789'),
      })
    );

    return ok(user);
  }
}
