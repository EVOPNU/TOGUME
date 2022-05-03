import { Controller, Get, Res, Req, Delete, Post, Headers, Body, UseInterceptors, UploadedFile } from "@nestjs/common";
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
            return res.status(response2.status).json(response2.json());
        });
    }

}