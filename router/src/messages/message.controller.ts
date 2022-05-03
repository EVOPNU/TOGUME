import { Controller, Get, Res, Req, HttpStatus, Delete, Post, Put } from "@nestjs/common";

@Controller('/api/v1/message/')
export class MessageController {

    @Get('')
    async get(@Req() req, @Res() res) {
        return  res.redirect(307, `http://message:8189${req.originalUrl}`);
    }

    @Get(':id') 
    async getById(@Req() req, @Res() res) {
        return  res.redirect(307, `http://message:8189${req.originalUrl}`);
    }

    @Delete(':id')
    async delete(@Req() req, @Res() res) {
        return  res.redirect(307, `http://message:8189${req.originalUrl}`);
    }

    @Post('') 
    async post(@Req() req, @Res() res) {
        return  res.redirect(307, `http://message:8189${req.originalUrl}`);
    }

    @Put('')
    async put(@Req() req, @Res() res){
        return  res.redirect(307, `http://message:8189${req.originalUrl}`);
    }
}