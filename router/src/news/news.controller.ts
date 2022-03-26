import { Controller, Get, Put, Delete, Post, Req, Res, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/news/')
export class NewsController {

    @Get('')
    async getRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3000${req.originalUrl}`);
    }

    @Get(':id')
    async GetRedirect(@Req() req, @Res() res) {
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

    @Put(':id')
    async PutRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3000${req.originalUrl}`);
    }
}