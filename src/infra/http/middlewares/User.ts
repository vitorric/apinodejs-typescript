import passport, { PassportStatic } from 'passport';
import { Strategy as StrategyJWT, ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';

import User, { Roles } from '@core/entities/User';
import { encrypt, decryptLogin } from '@core/utils/crypto';
import { IUserRepository } from '@infra/db/IUserRepository';
import UserRepository from '@infra/db/mongodb/implementations/UserRepository';

import { isValidUser } from './BaseAuthUser';

const userRepository: IUserRepository = UserRepository;

export default (): PassportStatic => {
  passport.use(
    'user',
    new Strategy(
      {
        usernameField: 'email',
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const passwordDecrypted = decryptLogin(password, req.body.buffer);

          const user: User = await userRepository.findOne({ email });

          if (user === null || !isValidUser(user)) {
            return done(null, false);
          }

          // Check if the password is corret
          const encryptedPassword = encrypt(passwordDecrypted);
          const isMatch = encryptedPassword === user.password;

          if (!isMatch) {
            return done(null, false);
          }

          // Otherwise, return the cliente
          return done(null, { user });
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.use(
    'userAuthenticated',
    new StrategyJWT(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (payload, done) => {
        try {
          if (!payload.auth) return done(null, false);

          // get the user given the email
          const user: User = (await userRepository.findById(
            payload.auth.userId
          )) as User;

          if (user === null || !isValidUser(user)) {
            return done(null, false);
          }

          if (user.role !== Roles.User) {
            return done(null, false);
          }

          // Otherwise, return the cliente
          return done(null, {
            user,
          });
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  return passport;
};
