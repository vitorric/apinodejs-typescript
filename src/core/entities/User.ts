export enum Roles {
  'User' = 'User',
}

export default class User {
  public readonly _id: any;

  public name?: string;

  public email?: string;

  public password?: string;

  public role?: Roles;

  public firstAccessDone?: boolean;

  public termsOfUse?: boolean;

  public status?: boolean;

  public deleted?: boolean;

  public createdAt?: Date;

  public updatedAt?: Date;

  constructor(props: Omit<User, '_id'>) {
    Object.assign(this, props);
  }
}
