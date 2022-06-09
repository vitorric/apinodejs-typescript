import { UserService } from '@core/services/user/UserService';

class UserFactory {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getService(): UserService {
    return this.userService;
  }
}

export default new UserFactory();
