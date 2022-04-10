import { Model } from "sequelize-typescript";
interface NewsCreationAtts {
    user_id: number;
    public_id: number;
    title: string;
    content: string;
    dt_create: Date;
}
export declare class News extends Model<News, NewsCreationAtts> {
    id: number;
    user_id: number;
    public_id: number;
    title: string;
    content: string;
    dt_create: Date;
}
export {};
