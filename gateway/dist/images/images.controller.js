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
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const node_fetch_1 = require("node-fetch");
const FormData = require("form-data");
let ImagesController = class ImagesController {
    async getRedirect(req, res, headers) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: { 'Id': `${response.headers.get('Id')}` }
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
    async GetByImageId(req, res, headers) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: { 'Id': `${response.headers.get('Id')}` }
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
    async GetByNewsId(req, res, headers) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: { 'Id': `${response.headers.get('Id')}` }
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
    async DeleteRedirect(req, res, headers) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'POST',
                    headers: { 'Id': `${response.headers.get('Id')}` }
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });
            }
            else {
                return res.status(common_1.HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
    async PostRedirect(req, res, headers, image) {
        await (0, node_fetch_1.default)('http://localhost:5113/api/v1/authorization', {
            method: 'GET',
            headers: { 'Authorization': `${headers.authorization}` }
        }).then(async (response) => {
            if (response.status == 200) {
                let formData = new FormData();
                formData.append('image', JSON.stringify(image));
                (0, node_fetch_1.default)(`http://localhost:3001${req.originalUrl}`, {
                    method: 'POST',
                    headers: { 'Id': `${response.headers.get('Id')}` },
                    body: formData
                }).then(response2 => {
                    return res.status(response2.status).json(response2.json());
                });
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
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getRedirect", null);
__decorate([
    (0, common_1.Get)('/byImageId/:id/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "GetByImageId", null);
__decorate([
    (0, common_1.Get)('/byNewsId/:id/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "GetByNewsId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "DeleteRedirect", null);
__decorate([
    (0, common_1.Post)(':news_id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "PostRedirect", null);
ImagesController = __decorate([
    (0, common_1.Controller)('/api/v1/images/')
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map