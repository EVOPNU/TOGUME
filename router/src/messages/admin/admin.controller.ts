import { Controller, Get, Req, Res, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/message/admin/')
export class MessageAdminController {

    @Get('')
    async get(@Req() req, @Res() res) {
        return  res.redirect(307, `http://message:8189${req.originalUrl}`);
    }

    @Get(':id')
    async getById(@Req() req, @Res() res) {
        return  res.redirect(307, `http://message:8189${req.originalUrl}`);
    }
}