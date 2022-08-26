import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  DB_MONGO_CONNECTION,
  DB_MONGO_DB,
  DB_MONGO_HOST,
  DB_MONGO_PASSWORD,
  DB_MONGO_PORT,
  DB_MONGO_USER,
} from './config/constants';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const data = {
          connection: configService.get(DB_MONGO_CONNECTION),
          user: configService.get(DB_MONGO_USER),
          pass: configService.get(DB_MONGO_PASSWORD),
          host: configService.get(DB_MONGO_HOST),
          port: configService.get(DB_MONGO_PORT),
          dbName: configService.get(DB_MONGO_DB),
        };
        const { connection, user, pass, host, port, dbName } = data;
        return {
          uri: `${connection}://${user ? `${user}:${pass}@` : ''}${host}${
            port ? `:${port}` : ''
          }/${dbName}`,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [ConfigModule],
})
export class AppModule {}
