import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import * as bcrypt from 'bcryptjs';

@Injectable() 
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly UserRepository: Repository<UserEntity>) { }
  private saltRounds = 10;

  async createUser (data: CreateUserDto): Promise<UserEntity> {
    let user = new UserEntity();
    user.login = data.login;
    user.password = await this.getHash(data.password);
//    user.password = data.password;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    
    await this.UserRepository.save(user);

    return user
  }

  async updateUser (id: number, dto: UpdateUserDto): Promise<UserEntity> {
    await this.UserRepository.update(id, {...dto});
    return this.UserRepository.findOne(id);
  }

  async removeUser (id: number): Promise<Boolean> {
    const result = await this.UserRepository.delete(id);
    return !!result.affected;
  }

  async getUsers () {
    return await this.UserRepository.find();
  }

  async getHash(password: string|undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
