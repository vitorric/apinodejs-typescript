import v1 from './v1';

export default (app: any): any => {
  app.use('/v1', v1);
};
