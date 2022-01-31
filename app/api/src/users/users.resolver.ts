
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'

import { UserModel, UserModelInput } from './user.dto';
import { UsersService } from './users.service';

@Resolver(_ => UserModel)
export class UsersResolver {
  constructor(
    private readonly userService: UsersService
  ){}

  @Query(_ => [UserModel], {name: 'getusers'})
  async getAllUser(): Promise<UserModel[]>{
    const users = await this.userService.getUsers();
    return users;
  }

  @Query(_ => UserModel, {name: 'getuser'})
  async getUser(@Args('kennitala') kennitala: string): Promise<UserModel>{
    const user = await this.userService.getUserById(kennitala);
    return user;
  }

  @Mutation(() => UserModel)
  async updateUser(@Args('input') input: UserModelInput): Promise<UserModel> {
    return this.userService.updateUser(input)
  }

  @Mutation(() => UserModel)
  async addUser(@Args('input') input: UserModelInput): Promise<UserModel> {
    return this.userService.addUser(input)
  }
}
