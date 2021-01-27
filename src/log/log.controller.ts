import { LogService } from './log.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('log')
export class LogController {
  constructor(private LogService: LogService) {}

  @Get()
  read() {
    return this.LogService.read();
  }

  @Get(':id')
  readOnlyOne(@Param() id: string) {
    return this.LogService.readOnlyOne(id);
  }
}
