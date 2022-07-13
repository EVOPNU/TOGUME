export class CreateNewsDto {
    readonly user_id: number;
    readonly public_id: number;
    readonly title: string;
    readonly content: string;
}