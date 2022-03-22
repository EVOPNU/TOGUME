import { Image } from "./images.model";
import { CreateImageDto } from "./dto/create-image.dto";
export declare class ImagesService {
    private imageRepository;
    constructor(imageRepository: typeof Image);
    createImage(image: any): Promise<string>;
    create(dto: CreateImageDto, image: any): Promise<Image>;
    findAllByNewsId(id: number): Promise<Image[]>;
    findOneByImageId(id: number): Promise<Image>;
    findAll(): Promise<Image[]>;
    deleteImage(id: number): Promise<number>;
}
