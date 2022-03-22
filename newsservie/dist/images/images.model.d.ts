import { Model } from "sequelize-typescript";
interface CreateImageAtts {
    image: string;
    news_id: number;
    dt_create: Date;
}
export declare class Image extends Model<Image, CreateImageAtts> {
    id: number;
    image: string;
    news_id: number;
    dt_create: Date;
}
export {};
