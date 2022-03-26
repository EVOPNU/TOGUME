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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let MessageController = class MessageController {
    async get(req, res) {
        await (0, node_fetch_1.default)('http://localhost:5000/api/v1/user/account/').then(response => {
            if (response.status == 200) {
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async getById(req, res) {
        await (0, node_fetch_1.default)('http://localhost:5000/api/v1/user/account/').then(response => {
            if (response.status == 200) {
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async delete(req, res) {
        await (0, node_fetch_1.default)('http://localhost:5000/api/v1/user/account/').then(response => {
            if (response.status == 200) {
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async post(req, res) {
        await (0, node_fetch_1.default)('http://localhost:5000/api/v1/user/account/').then(response => {
            if (response.status == 200) {
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async put(req, res) {
        await (0, node_fetch_1.default)('http://localhost:5000/api/v1/user/account/').then(response => {
            if (response.status == 200) {
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
};
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "put", null);
MessageController = __decorate([
    (0, common_1.Controller)('/api/v1/message/')
], MessageController);
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map