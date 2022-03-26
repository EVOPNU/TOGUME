import { Controller, Get, Res, Req, Delete, Post, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/images/')
export class ImagesController {
    
    @Get('')
    async getRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3000${req.originalUrl}`);
    }

    @Get('/byImageId/:id/')
    async GetByImageId(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3000${req.originalUrl}`);
    }

    @Get('/byNewsId/:id/')
    async GetByNewsId(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3000${req.originalUrl}`);
    }

    @Delete(':id')
    async DeleteRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3000${req.originalUrl}`);
    }

    @Post('')
    async PostRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3000${req.originalUrl}`);
    }

}