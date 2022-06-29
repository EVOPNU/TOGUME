import { Controller, Get, Res, Req, Delete, Post, Headers, Body, UseInterceptors, UploadedFile, ConsoleLogger } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import fetch from "node-fetch";
import * as FormData from 'form-data';

@Controller('/api/v1/images/')
export class ImagesController {
    
    @Get('')
    async getRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://news:3000${req.originalUrl}`);
    }

    @Get('/byImageId/:id/')
    async GetByImageId(@Req() req, @Res() res) {
        return  res.redirect(307, `http://news:3000${req.originalUrl}`);
    }

    @Get('/byNewsId/:id/')
    async GetByNewsId(@Req() req, @Res() res) {
        return  res.redirect(307, `http://news:3000${req.originalUrl}`);
    }

    @Delete(':id')
    async DeleteRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://news:3000${req.originalUrl}`);
    }

    @Post(':news_id')
    @UseInterceptors(FileInterceptor('image'))
    async PostRedirect(@Req() req, @Res() res, @Body() body, @Headers() headers, @UploadedFile() image) {
        let formData = new FormData();
        formData.append('image', JSON.stringify(body));
        fetch(`http://news:3000${req.originalUrl}`, {
            method: 'POST',
            body: formData
        }).then(response2 => {
            let count = 0; 
            //"count" for counting response if 1 then response is true if 0 then response is false 
            //Need for error if "then" block is not been, because if dont do this response will be sends twice
            //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
            // res.set('Id', `${response.headers.get('Id')}`);
            response2.json()
            .catch(err => {
                count = 1;
                return res.status(response2.status).send({});
            })
            .then(data => {
                if(count == 0) {
                    return res.status(response2.status).json(data);
                }
            });
        });
    }

}