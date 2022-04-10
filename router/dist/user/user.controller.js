"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
let UserController = class UserController {
    async changePassword(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async getUserById(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateFirstName(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateLastName(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateThirdName(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateBirthday(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateGroupUniversity(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateteFakulty(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateNickname(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateStatusInProfile(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
    async updateMainPhoto(req, res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }
};
__decorate([
    (0, common_1.Put)('/change/password/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Put)('/change/firstname'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateFirstName", null);
__decorate([
    (0, common_1.Put)('/change/lastname'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateLastName", null);
__decorate([
    (0, common_1.Put)('/change/thirdname'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateThirdName", null);
__decorate([
    (0, common_1.Put)('/change/birthday'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateBirthday", null);
__decorate([
    (0, common_1.Put)('/change/groupuniversity'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateGroupUniversity", null);
__decorate([
    (0, common_1.Put)('/change/changefakulty'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateteFakulty", null);
__decorate([
    (0, common_1.Put)('/change/nickname'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateNickname", null);
__decorate([
    (0, common_1.Put)('/change/statusinprofile'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateStatusInProfile", null);
__decorate([
    (0, common_1.Put)('/change/mainphoto'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateMainPhoto", null);
UserController = __decorate([
    (0, common_1.Controller)('/api/v1/user/account/')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map