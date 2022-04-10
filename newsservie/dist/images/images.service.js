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
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const images_model_1 = require("./images.model");
let ImagesService = class ImagesService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    async createImage(image) {
        try {
            const imageName = uuid.v4() + '.jpg';
            const imagePath = path.resolve(__dirname, '..', '..', 'images');
            if (!fs.existsSync(imagePath)) {
                fs.mkdirSync(imagePath, { recursive: true });
            }
            fs.writeFileSync(path.join(imagePath, imageName), image);
            return imageName;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException('Произошла ошибка при записи файла', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(news_id, image) {
        let dto;
        const imageName = await this.createImage(image);
        const dateNow = new Date;
        const _image = await this.imageRepository.create(Object.assign(Object.assign({}, dto), { news_id: news_id, image: imageName, dt_create: dateNow }));
        return _image;
    }
    async findAllByNewsId(id) {
        const image = await this.imageRepository.findAll({ where: { news_id: id } });
        if (image === null) {
            return new common_1.HttpException('Image is not be finded', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return image;
        }
    }
    async findOneByImageId(id) {
        const image = await this.imageRepository.findOne({ where: { id: id } });
        if (image === null) {
            return new common_1.HttpException('Image is not be finded', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return image;
        }
    }
    async findAll() {
        const images = await this.imageRepository.findAll();
        if (images === null) {
            return new common_1.HttpException('Images is not be finded', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return images;
        }
    }
    async deleteImage(id) {
        return this.imageRepository.destroy({ where: { id: id } });
    }
};
ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(images_model_1.Image)),
    __metadata("design:paramtypes", [Object])
], ImagesService);
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map