import UserFactory from 'core/factories/user/UserFactory';
import dotenv from 'dotenv';

// import server from '../src/app';

export default (): void => {
  const userService = UserFactory.getService();
  userService.create(null);
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  });
};
