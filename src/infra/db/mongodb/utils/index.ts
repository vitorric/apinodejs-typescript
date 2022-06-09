import { Types } from 'mongoose';

export const ObjectIdCast = (_id: any): Types.ObjectId => {
  return new Types.ObjectId(_id);
};

export interface IQueryPagination<T> {
  metadata: any;
  data: T[];
}
