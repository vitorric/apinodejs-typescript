import { UserService } from '@core/services/user/UserService';
import UserRepository from '@infra/db/mongodb/implementations/UserRepository';

class UserFactory {
  private userService: UserService;

  constructor() {
    this.userService = new UserService(UserRepository);
  }

  getService(): UserService {
    return this.userService;
  }
}

export default new UserFactory();
