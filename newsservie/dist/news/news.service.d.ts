import { HttpStatus } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { DeleteNewsDto } from './dto/delete-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './news.model';
import { Image } from 'src/images/images.model';
export declare class NewsService {
    private newsRepository;
    private imageRepository;
    constructor(newsRepository: typeof News, imageRepository: typeof Image);
    createNews(dto: CreateNewsDto): Promise<News>;
    findById(id: number): Promise<News>;
    findAll(): Promise<News[]>;
    deleteNews(dto: DeleteNewsDto): Promise<HttpStatus>;
    updateNews(id: number, dto: UpdateNewsDto): Promise<News>;
}
