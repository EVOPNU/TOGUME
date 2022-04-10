import { Controller, Post, Req, Res, HttpStatus, Get } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/Authorization/')
export class AuthController {

    @Post('/Login/')
    async LoginRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }

    @Post('/Registration/')
    async RegistrationRedirect(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }

    @Post('/Confirm/')
    async confirm (@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }

    @Get('/')
    valid(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }

    @Get('/idinbody/')
    id_in_body(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5113${req.originalUrl}`);
    }
}