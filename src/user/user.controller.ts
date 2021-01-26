import { IUser } from './user.interface';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  read() {
    return this.UserService.read();
  }

  @Get(':id')
  readOnlyOne(@Param('id') id: string) {
    return this.UserService.readOnlyOne(id);
  }

  @Post()
  create(@Body() data: IUser) {
    return this.UserService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: IUser) {
    return this.UserService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.UserService.delete(id);
  }
}
