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
    async getRedirect(req, res) {
        return res.redirect(307, `http://news:3000${req.originalUrl}`);
    }
    async GetByImageId(req, res) {
        return res.redirect(307, `http://news:3000${req.originalUrl}`);
    }
    async GetByNewsId(req, res) {
        return res.redirect(307, `http://news:3000${req.originalUrl}`);
    }
    async DeleteRedirect(req, res) {
        return res.redirect(307, `http://news:3000${req.originalUrl}`);
    }
    async PostRedirect(req, res, body, headers, image) {
        let formData = new FormData();
        formData.append('image', JSON.stringify(body));
        (0, node_fetch_1.default)(`http://localhost:3000${req.originalUrl}`, {
            method: 'POST',
            body: formData
        }).then(response2 => {
            let count = 0;
            response2.json()
                .catch(err => {
                count = 1;
                return res.status(response2.status).send({});
            })
                .then(data => {
                if (count == 0) {
                    return res.status(response2.status).json(data);
                }
            });
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
], ImagesController.prototype, "getRedirect", null);
__decorate([
    (0, common_1.Get)('/byImageId/:id/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "GetByImageId", null);
__decorate([
    (0, common_1.Get)('/byNewsId/:id/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "GetByNewsId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "DeleteRedirect", null);
__decorate([
    (0, common_1.Post)(':news_id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Headers)()),
    __param(4, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "PostRedirect", null);
ImagesController = __decorate([
    (0, common_1.Controller)('/api/v1/images/')
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map