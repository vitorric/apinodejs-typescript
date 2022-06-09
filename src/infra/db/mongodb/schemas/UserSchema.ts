import { Schema, Document } from 'mongoose';

import { Roles } from 'core/entities/User';

import conn from '../connection';

export type UserDocument = Document & {
  name: string;
  email: string;
  password: string;
  role: Roles;
  termsOfUse: boolean;
  status: boolean;
  deleted: boolean;
  firstAccessDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['User'],
      required: true,
    },
    termsOfUse: {
      type: Boolean,
      default: false,
    },
    firstAccessDone: {
      type: Boolean,
      default: 0,
    },
    status: {
      type: Boolean,
      default: 1,
    },
    deleted: {
      type: Boolean,
      default: 0,
    },
  },
  {
    collection: 'User',
    timestamps: true,
  }
);

export default conn.model<UserDocument>('User', UserSchema);
