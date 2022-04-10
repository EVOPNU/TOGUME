import { ImagesService } from "./images.service";
export declare class ImagesController {
    private imageService;
    constructor(imageService: ImagesService);
    createImage(image: any, news_id: any, headers: any, body: any): Promise<import("./images.model").Image>;
    findAllByNewsId(id: number): Promise<import("@nestjs/common").HttpException | import("./images.model").Image[]>;
    findOneByImageId(id: number): Promise<import("./images.model").Image | import("@nestjs/common").HttpException>;
    findAll(): Promise<import("@nestjs/common").HttpException | import("./images.model").Image[]>;
    deleteImage(id: number): Promise<number>;
}
