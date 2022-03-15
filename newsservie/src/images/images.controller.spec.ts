import { Test, TestingModule } from '@nestjs/testing';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

describe('ImagesController', () => {
    let imagesController: ImagesController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ImagesController],
            providers: [ImagesService]
        }).compile();

        imagesController = app.get<ImagesController>(ImagesController);
    });

    describe('root', () => {
        // it('POST/sholud create and return news and statusCode 200', () => {
        //     expect(newsController.createNews({
        //         "GroupID":1,
        //         "UserID":2,
        //         "content":"41",
        //         "title":"4214"
        //     })).toBe(200);
        // })
        // it('GET/should return statusCode = 200 and JSON with news`s dto', () => {
            
        //     expect(newsController.findById(1)).toBe(NotNull);
        // });
        // it('GET/should return ');
        it('DELETE/should return statusCode 200', () => {
            expect(imagesController.deleteImage(3)).toBe(200);
        })
    });
});