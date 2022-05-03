"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const images_module_1 = require("./images/images.module");
const news_module_1 = require("./news/news.module");
const serveStatic_module_1 = require("./ServeStatic/serveStatic.module");
const auth_module_1 = require("./user/Auth/auth.module");
const groups_module_1 = require("./groups/groups.module");
const user_module_1 = require("./user/user.module");
const message_module_1 = require("./messages/message.module");
const admin_module_1 = require("./messages/admin/admin.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            images_module_1.ImagesModule,
            serveStatic_module_1.ServeStaticModule,
            news_module_1.NewsModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            groups_module_1.GroupsModule,
            message_module_1.MessageModule,
            admin_module_1.MessageAdminModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map