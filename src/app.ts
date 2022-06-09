/* eslint-disable import/first */
import './config';

import express from 'express';
import morgan from 'morgan';

import passport from '@infra/http/middlewares';
import routes from '@infra/http/routes';

const app = express();

passport(app);

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, PATCH');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-type, Accept, Authorization, content-encoding'
  );

  delete req.headers['content-encoding'];
  next();
});

app.use(
  morgan('dev'),
  express.json({ limit: '1000MB' }),
  express.urlencoded({ limit: '2000MB', extended: true })
);

routes(app);

export default app;
