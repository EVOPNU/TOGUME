import { CreateImageDto } from "./dto/create-image.dto";
import { ImagesService } from "./images.service";
export declare class ImagesController {
    private imageService;
    constructor(imageService: ImagesService);
    createImage(dto: CreateImageDto, image: any): Promise<import("./images.model").Image>;
    findAllByNewsId(id: number): Promise<import("./images.model").Image[]>;
    findOneByImageId(id: number): Promise<import("./images.model").Image>;
    findAll(): Promise<import("./images.model").Image[]>;
    deleteImage(id: number): Promise<number>;
}
