import { ResponseController, ok } from '../../controllers/ResponseController';
import { IUserCreateDTO } from './IUserServiceDTO';

export class UserService {
  // constructor() {}

  async create(data: IUserCreateDTO): Promise<ResponseController> {
    console.log(data);
    // const user = (await this.userRepository.create(
    //   new User({
    //     ...data,
    //     password: encrypt(RandomString(8)),
    //   })
    // )) as User;
    return ok();
  }
}
