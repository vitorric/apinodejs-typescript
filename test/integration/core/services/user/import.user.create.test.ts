import { Roles } from 'core/entities/User';
import UserFactory from 'core/factories/user/UserFactory';
import { UserService } from 'core/services/user/UserService';

import { hooks } from '../../../../hooks';

hooks();

const userService: UserService = UserFactory.getService();

describe('Create User', () => {
  it('successfully', async () => {
    const user = await userService.create({
      email: 'vitorricardo@email.com',
      role: Roles.User,
    });

    expect(user.statusCode).toEqual(200);
    expect(user.success).toBeTruthy();
    expect(user.payload).toMatchObject({
      email: 'vitorricardo@email.com',
      role: Roles.User.toString(),
    });
  });
});
