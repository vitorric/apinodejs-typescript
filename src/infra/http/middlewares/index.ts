import passport from 'passport';

import userPassport from './User';

export default (app: any): void => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  userPassport();

  app.use(passport.initialize());
};
