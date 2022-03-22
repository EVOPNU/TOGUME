import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CreateImageAtts {
    image: string;
    news_id: number;
    dt_create: Date;
}

@Table({tableName: 'image', updatedAt: false, createdAt: false})
export class Image extends Model<Image, CreateImageAtts> {

    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    image: string;

    @Column({type: DataType.INTEGER})
    news_id: number;            

    @Column({type: DataType.DATE, allowNull: true})
    dt_create: Date;
}