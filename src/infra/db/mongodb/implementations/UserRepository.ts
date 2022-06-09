import User from '@core/entities/User';

import { IUserRepository } from '../../IUserRepository';
import schema from '../schemas/UserSchema';
import { ObjectIdCast } from '../utils';

class UserRepository implements IUserRepository {
  async exists(email: string): Promise<boolean> {
    const user = await schema.findOne({ email }).lean().exec();
    return !!user;
  }

  async create(user: User): Promise<User> {
    const newUser = await schema.create(user);
    return new User(newUser.toObject());
  }

  async update(userId: any, user: User): Promise<boolean> {
    await schema
      .updateOne(
        {
          _id: ObjectIdCast(userId),
        },
        {
          $set: {
            ...user,
          },
        }
      )
      .exec();
    return true;
  }

  async findOne(params: any): Promise<User> {
    return new User(
      await schema
        .findOne({ ...params })
        .lean()
        .exec()
    );
  }

  async findById(userId: any): Promise<User> {
    return new User(
      await schema
        .findOne({ _id: ObjectIdCast(userId) })
        .lean()
        .exec()
    );
  }
}

export default new UserRepository();
