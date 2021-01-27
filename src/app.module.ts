import { LogEntity } from './log/log.entity';
import { UserEntity } from './user/user.entity';
import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: String(process.env.DATABASE_HOST),
      port: Number(process.env.DATABASE_PORT),
      database: String(process.env.DATABASE),
      useUnifiedTopology: true,
      entities: [UserEntity, LogEntity],
    }),
    UserModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
