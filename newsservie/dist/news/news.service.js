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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const news_model_1 = require("./news.model");
const node_fetch_1 = require("node-fetch");
const images_model_1 = require("../images/images.model");
let NewsService = class NewsService {
    constructor(newsRepository, imageRepository) {
        this.newsRepository = newsRepository;
        this.imageRepository = imageRepository;
    }
    async createNews(dto) {
        const dateNow = new Date;
        return this.newsRepository.create(Object.assign(Object.assign({}, dto), { dt_create: dateNow }));
    }
    async findByGroupId(public_id) {
        const news = await this.newsRepository.findAll({ where: { public_id: public_id } });
        if (news[0]) {
            return news;
        }
        else {
            return new common_1.HttpException('News is not be finded', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findById(id) {
        const news = await this.newsRepository.findOne({ where: { id: id } });
        if (news) {
            return news;
        }
        else {
            return new common_1.HttpException('News is not be finded', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findAll() {
        const news = await this.newsRepository.findAll();
        if (news[0]) {
            return news;
        }
        else {
            return new common_1.HttpException('News is not be finded', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async deleteNews(dto) {
        if (dto.public_id && dto.user_delete_id && dto.id) {
            const userCreate = await this.newsRepository.findOne({ where: { id: dto.id } });
            if (dto.user_delete_id === userCreate.user_id) {
                await this.newsRepository.destroy({ where: { id: dto.id } });
                await this.imageRepository.destroy({ where: { news_id: dto.id } });
                return common_1.HttpStatus.OK;
            }
            else {
                try {
                    await (0, node_fetch_1.default)('http://groups:5062/api/v1/Groups/Yura');
                }
                catch (err) {
                    throw new common_1.HttpException('Произошла ошибка при попытке отправить запрос на сервис проверки роли', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
                await (0, node_fetch_1.default)('http://groups:5062/api/v1/Groups/Yura', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dto)
                }).then(async (response) => {
                    if (response.status === 200) {
                        await this.newsRepository.destroy({ where: { id: dto.id } });
                        await this.imageRepository.destroy({ where: { news_id: dto.id } });
                        return common_1.HttpStatus.OK;
                    }
                    else {
                        throw new common_1.HttpException('Пользователь не может удалить новость, т.к. не является администратором или её создателем', common_1.HttpStatus.FORBIDDEN);
                    }
                });
            }
        }
        else {
            throw new common_1.HttpException('Отсутствует id пользователя или id группы или id новости', common_1.HttpStatus.NO_CONTENT);
        }
    }
    async updateNews(id, dto) {
        await this.newsRepository.update(Object.assign({}, dto), { where: { id: id } });
        const user = await this.newsRepository.findOne({ where: { id: id } });
        return user;
    }
};
NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(news_model_1.News)),
    __param(1, (0, sequelize_1.InjectModel)(images_model_1.Image)),
    __metadata("design:paramtypes", [Object, Object])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map