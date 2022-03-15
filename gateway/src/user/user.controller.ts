import { Controller, Res, Put, Req, Get, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/user/account/')
export class UserController {

    @Put('/change/password/')
    async changePassword(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Get(':id')
    async getUserById(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/firstname/')
    async changeFistName(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/lastname/')
    async changeLastName(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/thirdname/')
    async changeThirdName(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/birthday/')
    async changeBirthday(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/groupuniversity/')
    async changeGroupUniversity(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/changefakulty/')
    async changeFakulty(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/nickname/')
    async changeNickname(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/statusinprofile/')
    async changeStatusInProfile(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }

    @Put('/change/mainphoto/')
    async changeMainPhoto(@Res() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }
}