import { Module } from "@nestjs/common";
import { MessageAdminController } from "./admin.controller";


@Module({
    controllers: [MessageAdminController]
})
export class MessageAdminModule {}