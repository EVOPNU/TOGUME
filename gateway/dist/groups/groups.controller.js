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
const node_fetch_1 = require("node-fetch");
let GroupsController = class GroupsController {
    async createGroup(req, res) {
        console.log('12313');
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            console.log('qeeq');
            if (response.status == 200) {
                console.log('12344');
                res.set('Id', response.headers.get('Id'));
                console.log('qeq21r');
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async sender(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async addUser(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async GetByUserId(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async request(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async listRequest(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async usersInvites(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async deleteRequest(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async getRight(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async deleteUser(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async removeGroup(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async GetDataGroup(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async UsersOfGroup(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async allGroups(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async usersGroup(req, res) {
        return await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization').then(async (response) => {
            if (response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
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