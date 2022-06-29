import { Injectable, HttpException, HttpStatus, ParseIntPipe } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { Image } from "./images.model";
import { CreateImageDto } from "./dto/create-image.dto";


@Injectable()
export class ImagesService {

    constructor(@InjectModel(Image) private imageRepository: typeof Image) {}

    async createImage(image): Promise<string> {
        try {
            const image_buffer = JSON.parse(JSON.parse(image.image).image).buffer;
            const buffer = Buffer.from(image_buffer.data);
            const imageName = uuid.v4() + '.jpg';
            const imagePath = path.resolve(__dirname,'..','..', 'images');
            if (!fs.existsSync(imagePath)) {
                fs.mkdirSync(imagePath, {recursive: true})
            }
            fs.writeFileSync(path.join(imagePath, imageName), buffer);
            return imageName;
        } catch (e) {
            console.log(e);
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async create(news_id: number, image: any) {
        let dto: CreateImageDto;
        const imageName = await this.createImage(image);
        const dateNow = new Date;
        const imageInfo = await this.imageRepository.create({... dto,news_id: news_id, image: imageName, dt_create: dateNow});
        return imageInfo;
    }

    async findAllByNewsId(id: number) {
        const image = await this.imageRepository.findAll({where:{news_id: id}});
        if(image === null) {
            return new HttpException('Image is not be finded', HttpStatus.NOT_FOUND)
        }
        else {
            return image;
        }
    }

    async findOneByImageId(id: number) {
        const image = await this.imageRepository.findOne({where:{id: id}});
        if(image === null) {
            return new HttpException('Image is not be finded', HttpStatus.NOT_FOUND)
        }
        else {
            return image;
        }
    }

    async findAll() {
        const images = await this.imageRepository.findAll();
        if(images === null) {
            return new HttpException('Images is not be finded', HttpStatus.NOT_FOUND)
        }
        else {
            return images;
        }
    }

    async deleteImage(id: number) {
        return this.imageRepository.destroy({where:{id: id}});
    }
}