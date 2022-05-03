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
const FormData = require("form-data");
const node_fetch_1 = require("node-fetch");
let UserController = class UserController {
    async changePassword(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async getUserById(req, res, headers) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: { 'Id': `${response.headers.get('Id')}` },
                }).then(response2 => {
                    response2.json().then(data => {
                        res.set('Id', `${response.headers.get('Id')}`);
                        const status = response2.status;
                        return res.status(status).json(data);
                    });
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeFistName(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeLastName(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeThirdName(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeBirthday(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeGroupUniversity(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeFakulty(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeNickname(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeStatusInProfile(req, res, headers, body) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async changeMainPhoto(req, res, headers, body, image) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                let formData = new FormData();
                formData.append('image', JSON.stringify(image));
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: { 'Id': `${response.headers.get('Id')}` },
                    body: formData
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
};
__decorate([
    (0, common_1.Put)('/change/password/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Put)('/change/firstname/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeFistName", null);
__decorate([
    (0, common_1.Put)('/change/lastname/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeLastName", null);
__decorate([
    (0, common_1.Put)('/change/thirdname/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeThirdName", null);
__decorate([
    (0, common_1.Put)('/change/birthday/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeBirthday", null);
__decorate([
    (0, common_1.Put)('/change/groupuniversity/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeGroupUniversity", null);
__decorate([
    (0, common_1.Put)('/change/changefakulty/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeFakulty", null);
__decorate([
    (0, common_1.Put)('/change/nickname/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeNickname", null);
__decorate([
    (0, common_1.Put)('/change/statusinprofile/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeStatusInProfile", null);
__decorate([
    (0, common_1.Put)('/change/mainphoto/'),
    (0, common_1.UseInterceptors)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.Body)()),
    __param(4, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeMainPhoto", null);
UserController = __decorate([
    (0, common_1.Controller)('/api/v1/user/account/')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map