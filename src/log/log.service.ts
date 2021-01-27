import { LogEntity } from './log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogEntity)
    private logRepository: Repository<LogEntity>,
  ) {}

  async read() {
    return await this.logRepository.find();
  }

  async readOnlyOne(id: string) {
    return await this.logRepository.findOne(id);
  }
}
