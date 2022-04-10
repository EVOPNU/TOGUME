import { Response } from 'express';
export declare class ImagesController {
    getRedirect(req: any, res: any, headers: any): Promise<void>;
    GetByImageId(req: any, res: any, headers: any): Promise<void>;
    GetByNewsId(req: any, res: any, headers: any): Promise<void>;
    DeleteRedirect(req: any, res: any, headers: any): Promise<void>;
    PostRedirect(req: any, res: Response, headers: any, image: any): Promise<void>;
}
