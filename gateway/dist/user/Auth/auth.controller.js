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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
let AuthController = class AuthController {
    async LoginRedirect(req, res) {
        return res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }
    async RegistrationRedirect(req, res) {
        return res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }
    async confirm(req, res) {
        return res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }
    valid(req, res) {
        return res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }
    id_in_body(req, res) {
        return res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }
};
__decorate([
    (0, common_1.Post)('/Login/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "LoginRedirect", null);
__decorate([
    (0, common_1.Post)('/Registration/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "RegistrationRedirect", null);
__decorate([
    (0, common_1.Post)('/Confirm/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "confirm", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "valid", null);
__decorate([
    (0, common_1.Get)('/idinbody/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "id_in_body", null);
AuthController = __decorate([
    (0, common_1.Controller)('/api/v1/Authorization/')
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map