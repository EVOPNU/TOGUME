import { Controller, Get, Req, Res, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('')
export class ServeStaticController{

    @Get(':image')
    async GetRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:4000${req.originalUrl}`);
    }
}