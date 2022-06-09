import UserFactory from '@core/factories/user/UserFactory';

import { ResponseController } from '../ResponseController';

const userService = UserFactory.getService();

export default class UserController {
  async create(event: any): Promise<ResponseController> {
    return userService.create({ ...event.body });
  }
}
