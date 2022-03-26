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
exports.GroupsController = void 0;
const common_1 = require("@nestjs/common");
let GroupsController = class GroupsController {
    async createGroup(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async sender(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async addUser(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async GetByUserId(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async request(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async listRequest(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async usersInvites(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async deleteRequest(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async getRight(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async deleteUser(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async removeGroup(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async GetDataGroup(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async UsersOfGroup(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async allGroups(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
    async usersGroup(req, res) {
        return res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
};
__decorate([
    (0, common_1.Post)('/create/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Post)('/update/:sender'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "sender", null);
__decorate([
    (0, common_1.Get)('/add/:acess/:groupID/:userID/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "addUser", null);
__decorate([
    (0, common_1.Get)('/us/:userid'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "GetByUserId", null);
__decorate([
    (0, common_1.Get)('/request/:groupid/:userid/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "request", null);
__decorate([
    (0, common_1.Get)('/invge/:groupid/:sender/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "listRequest", null);
__decorate([
    (0, common_1.Get)('/invus/:userid'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "usersInvites", null);
__decorate([
    (0, common_1.Get)('/not/:groupid/:userid'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "deleteRequest", null);
__decorate([
    (0, common_1.Get)('/right/:groupid/:userid/:sender'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getRight", null);
__decorate([
    (0, common_1.Get)('/delete/:groupid/:userid/:sender'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('/exterminatus/:groupid/:sender'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "removeGroup", null);
__decorate([
    (0, common_1.Get)('/gr/:groupid'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "GetDataGroup", null);
__decorate([
    (0, common_1.Get)('/ingroup/:groupid'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "UsersOfGroup", null);
__decorate([
    (0, common_1.Get)('/allgroups/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "allGroups", null);
__decorate([
    (0, common_1.Get)('/us/:userID'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "usersGroup", null);
GroupsController = __decorate([
    (0, common_1.Controller)('/api/v1/Groups/')
], GroupsController);
exports.GroupsController = GroupsController;
//# sourceMappingURL=groups.controller.js.map