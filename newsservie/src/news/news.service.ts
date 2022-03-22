import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNewsDto } from './dto/create-news.dto';
import { DeleteNewsDto } from './dto/delete-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './news.model';
import fetch from 'node-fetch';
import { Image } from 'src/images/images.model';


@Injectable()
export class NewsService {

    constructor(@InjectModel(News) private newsRepository: typeof News,
                @InjectModel(Image) private imageRepository: typeof Image) {}

    async createNews(dto: CreateNewsDto) {
        const dateNow = new Date;
        console.log(dateNow);
        return this.newsRepository.create({...dto, dt_create: dateNow});
        // const news = await this.newsRepository.create({...dto, dt_create: dateNow});

    }

    async findById(id: number) {
        return this.newsRepository.findOne({where:{id: id}})
    }

    async findAll() {
        return this.newsRepository.findAll();
    }

    async deleteNews(dto: DeleteNewsDto) {
        if(dto.group_id && dto.user_delete_id && dto.id) {
            const userCreate = await this.newsRepository.findOne({where:{id: dto.id}});
            if(dto.user_delete_id === userCreate.user_id) {
                await this.newsRepository.destroy({where:{id: dto.id}});
                await this.imageRepository.destroy({where:{news_id: dto.id}});
                return HttpStatus.OK;
            }
            else {
                try{
                    await fetch('http://localhost:5062/api/v1/Groups/Yura');
                }catch(err) {
                    throw new HttpException('Произошла ошибка при попытке отправить запрос на сервис проверки роли', HttpStatus.INTERNAL_SERVER_ERROR)
                }
                await fetch('http:localhost:5062/api/v1/Groups/Yura', {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(dto)
                }).then(async response => {
                    if(response.status === 200) {
                        await this.newsRepository.destroy({where:{id: dto.id}});
                        await this.imageRepository.destroy({where:{news_id: dto.id}});
                        return HttpStatus.OK;
                    }
                    else {
                        console.log('qeqe');
                        throw new HttpException('Пользователь не может удалить новость, т.к. не является администратором или её создателем', HttpStatus.FORBIDDEN);
                    }
                });
            }
        }
        else {
            throw new HttpException('Отсутствует id пользователя или id группы или id новости',HttpStatus.NO_CONTENT);
        }
    }

    async updateNews(id: number, dto: UpdateNewsDto) {
        await this.newsRepository.update(dto, {where: {id: id}});
        const user = await this.newsRepository.findOne({where: {id: id}});
        return user;
    }

}
