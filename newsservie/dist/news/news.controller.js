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
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const create_news_dto_1 = require("./dto/create-news.dto");
const update_news_dto_1 = require("./dto/update-news.dto");
const news_service_1 = require("./news.service");
const delete_news_dto_1 = require("./dto/delete-news.dto");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    createNews(dto) {
        return this.newsService.createNews(dto);
    }
    findById(id) {
        return this.newsService.findById(id);
    }
    findAll() {
        return this.newsService.findAll();
    }
    deleteNews(dto) {
        return this.newsService.deleteNews(dto);
    }
    updateNews(dto, id) {
        return this.newsService.updateNews(id, dto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_news_dto_1.CreateNewsDto]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "createNews", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_news_dto_1.DeleteNewsDto]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "deleteNews", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_news_dto_1.UpdateNewsDto, Number]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "updateNews", null);
NewsController = __decorate([
    (0, common_1.Controller)('/api/v1/news/'),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
exports.NewsController = NewsController;
//# sourceMappingURL=news.controller.js.map