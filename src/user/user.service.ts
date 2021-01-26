import { IUser } from './user.interface';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async read() {
    return await this.userRepository.find();
  }

  async readOnlyOne(id: string) {
    return await this.userRepository.findOne(id);
  }

  async create(data: IUser) {
    return await this.userRepository.save(this.userRepository.create(data));
  }

  async update(id: string, data: IUser) {
    await this.userRepository.update(id, data);
    return await this.userRepository.findOne(id);
  }

  async delete(id: string) {
    const user = await this.userRepository.findOne(id);
    await this.userRepository.delete(id);
    return { user, deleted: true };
  }
}
