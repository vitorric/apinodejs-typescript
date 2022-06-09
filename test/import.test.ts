import User, { Roles } from 'core/entities/User';
import UserRepository from 'infra/db/mongodb/implementations/UserRepository';

const x = async () => {
  const userRepository = UserRepository;
  // return userRepository.create(
  //   new User({
  //     name: 'test',
  //     email: 'email@email.com',
  //     role: Roles.User,
  //   })
  // );
  return new User({
    name: 'test',
    email: 'email@email.com',
    role: Roles.User,
  });
};

describe('sum function', () => {
  it('guaranteed random', async () => {
    const user = await x();
    expect(user.name).toEqual('test');
  });
});
