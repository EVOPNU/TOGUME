import { Module } from '@nestjs/common';
import { News } from './news/news.model';
import { NewsModule } from './news/news.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ImagesModule } from './images/images.module';
import { Image } from './images/images.model';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      models: [News, Image],
      autoLoadModels: true
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname,'..', 'images'),
    }),
    NewsModule,
    ImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
