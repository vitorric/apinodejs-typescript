import { Router } from 'express';
import passport from 'passport';

import UserController from 'core/controllers/user/UserController';
import { resJson } from 'infra/http/utils';

const router = Router();
const passportAuthenticate = passport.authenticate('user');
const userController: UserController = new UserController();

router.post('/create', passportAuthenticate, async (request, response) =>
  resJson(response, await userController.create({ ...request }))
);

export default router;
