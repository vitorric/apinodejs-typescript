import mongoose from 'mongoose';

import conn from '../src/infra/db/mongodb/connection';

const mongoDisconnect = async () => {
  return mongoose.disconnect();
};

const clearDatabase = async () => {
  await conn.dropDatabase();
};

export const hooks = async (): Promise<void> => {
  beforeAll(async () => {
    // do anything before test
  });

  afterAll(async () => {
    await clearDatabase();
    await mongoDisconnect();
  });
};
