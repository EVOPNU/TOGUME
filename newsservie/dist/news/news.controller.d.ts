import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsService } from './news.service';
import { DeleteNewsDto } from './dto/delete-news.dto';
export declare class NewsController {
    private newsService;
    constructor(newsService: NewsService);
    createNews(dto: CreateNewsDto): Promise<import("./news.model").News>;
    findById(id: number): Promise<import("./news.model").News>;
    findAll(): Promise<import("./news.model").News[]>;
    deleteNews(dto: DeleteNewsDto): Promise<import("@nestjs/common").HttpStatus>;
    updateNews(dto: UpdateNewsDto, id: number): Promise<import("./news.model").News>;
}