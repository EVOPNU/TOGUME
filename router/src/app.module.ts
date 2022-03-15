import { Module } from '@nestjs/common';
import { ImagesModule } from './images/images.module';
import { NewsModule } from './news/news.module';
import { ServeStaticModule } from './ServeStatic/serveStatic.module';
import { AuthModule } from './user/Auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { MessageAdminModule } from './messages/admin/admin.module';

@Module({
  imports: [
    ImagesModule,
    ServeStaticModule,
    NewsModule,
    AuthModule,
    UserModule,
    GroupsModule,
    MessageModule,
    MessageAdminModule
  ]
})
export class AppModule {}
