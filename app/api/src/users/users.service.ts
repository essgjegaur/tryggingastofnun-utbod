import { Injectable } from '@nestjs/common';

import { UserModel, UserModelInput } from './user.dto';
import { users } from './data';

@Injectable()
export class UsersService {
  async getUsers(): Promise<UserModel[]>{
    return users;
  }

  async getUserById(kennitala: string): Promise<UserModel>{
    const userInfo = users.find(u => u.kennitala === kennitala)
    return userInfo;
  }

  async addUser(user: UserModelInput): Promise<UserModel>{
    const updatedUser = Object.keys(user).reduce(
      (acc, key) => ({
        ...acc,
      }),
      {} as UserModel
    )

    users.push(updatedUser);
    return users[users.length-1];

  }

  async updateUser(user: UserModelInput): Promise<UserModel>{
    const updatedUser = {...user} as UserModel;

    const index = users.findIndex(u => user.kennitala === updatedUser.kennitala)
    users[index] = updatedUser;
    return updatedUser;
  }
}
