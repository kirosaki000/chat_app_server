import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

dotenv.config();

const mongodbUri = process.env.MONGODB_HOST_URI;
const mongodbConfig = MongooseModule.forRoot(mongodbUri, {
  dbName: 'chat-app',
});

const moduleImports = [mongodbConfig, UsersModule];

@Module({
  imports: moduleImports,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
