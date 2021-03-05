import { validate } from 'class-validator';
import { IUser } from './user.interface';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async read() {
    return await this._userRepository.find();
  }

  async readOnlyOne(id: string) {
    return await this._userRepository.findOne(id);
  }

  async create(data: IUser) {
    const user = this._userRepository.create(data);
    const error = await validate(user);

    if (error.length != 0) {
      return error;
    }
    return await this._userRepository.save(user);
  }

  async update(id: string, data: IUser) {
    await this._userRepository.update(id, data);
    return await this._userRepository.findOne(id);
  }

  async delete(id: string) {
    const user = await this._userRepository.findOne(id);
    await this._userRepository.delete(id);
    return { user, deleted: true };
  }
}
