import { HttpException } from "@nestjs/common";
import { Image } from "./images.model";
export declare class ImagesService {
    private imageRepository;
    constructor(imageRepository: typeof Image);
    createImage(image: any): Promise<string>;
    create(news_id: number, image: any): Promise<Image>;
    findAllByNewsId(id: number): Promise<HttpException | Image[]>;
    findOneByImageId(id: number): Promise<Image | HttpException>;
    findAll(): Promise<HttpException | Image[]>;
    deleteImage(id: number): Promise<number>;
}
