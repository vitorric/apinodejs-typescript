import { Roles } from 'core/entities/User';
import UserFactory from 'core/factories/user/UserFactory';
import { UserService } from 'core/services/user/UserService';

import { hooks } from '../../../../hooks';

hooks();

const userService: UserService = UserFactory.getService();
const email = 'vitorricardo@email.com';

describe('Create User', () => {
  it('successfully', async () => {
    const user = await userService.create({
      email,
      role: Roles.User,
    });

    expect(user.statusCode).toEqual(200);
    expect(user.success).toBeTruthy();
    expect(user.payload).toMatchObject({
      email,
      role: Roles.User.toString(),
    });
  });

  it('email already exists', async () => {
    const user = await userService.create({
      email,
      role: Roles.User,
    });

    expect(user.statusCode).toEqual(409);
    expect(user.success).toBeFalsy();
    expect(user.payload).toMatchObject({
      error: 'User email already exists.',
    });
  });
});
