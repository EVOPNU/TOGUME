import { Column, CreatedAt, DataType, Model, Table } from "sequelize-typescript";

interface NewsCreationAtts {
    user_id: number;
    public_id: number;
    title: string;
    content: string;
    dt_create: Date;
}

@Table({tableName: 'news', updatedAt: false, createdAt: false})
export class News extends Model<News, NewsCreationAtts> {  
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    user_id: number;

    @Column({type: DataType.INTEGER})
    public_id: number;

    @Column({type: DataType.STRING, allowNull: true})
    title: string;

    @Column({type: DataType.STRING, allowNull: true})
    content: string;

    @Column({type: DataType.DATE, allowNull: true})
    dt_create: Date;
    

}