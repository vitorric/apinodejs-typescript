import User from 'core/entities/User';

const isValidUser = async (user: User): Promise<boolean> => {
  if (!user._id) {
    return false;
  }

  if (user.deleted || !user.status) {
    return false;
  }

  return true;
};

export { isValidUser };
