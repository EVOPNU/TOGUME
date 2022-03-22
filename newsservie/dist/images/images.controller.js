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
const create_image_dto_1 = require("./dto/create-image.dto");
const platform_express_1 = require("@nestjs/platform-express");
const images_service_1 = require("./images.service");
let ImagesController = class ImagesController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    createImage(dto, image) {
        return this.imageService.create(dto, image);
    }
    findAllByNewsId(id) {
        return this.imageService.findAllByNewsId(id);
    }
    findOneByImageId(id) {
        return this.imageService.findOneByImageId(id);
    }
    findAll() {
        return this.imageService.findAll();
    }
    deleteImage(id) {
        return this.imageService.deleteImage(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_image_dto_1.CreateImageDto, Object]),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "createImage", null);
__decorate([
    (0, common_1.Get)('/byNewsId/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "findAllByNewsId", null);
__decorate([
    (0, common_1.Get)('/byImageId/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "findOneByImageId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "deleteImage", null);
ImagesController = __decorate([
    (0, common_1.Controller)('/api/v1/images'),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map