import { Test, TestingModule } from '@nestjs/testing';
import { NotNull } from 'sequelize-typescript';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

describe('NewsController', () => {
    let newsController: NewsController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [NewsController],
            providers: [NewsService]
        }).compile();

        newsController = app.get<NewsController>(NewsController);
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
            expect(newsController.deleteNews({
                "groupId":2,
                "newsId":1,
                "userDeleteId":1
            })).toBe(200);
        })
    });
});