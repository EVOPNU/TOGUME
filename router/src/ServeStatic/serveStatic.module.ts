import { Module } from '@nestjs/common';
import { ServeStaticController } from './serveStatic.controller';

@Module({
    controllers: [ServeStaticController]
})
export class ServeStaticModule {}