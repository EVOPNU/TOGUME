import { Controller, Res, Put, Req, Get, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/user/account/')
export class UserController {

    @Put('/change/password/')
    async changePassword(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Get(':id')
    async getUserById(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/firstname')
    async updateFirstName(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/lastname')
    async updateLastName(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/thirdname')
    async updateThirdName(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/birthday')
    async updateBirthday(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/groupuniversity')
    async updateGroupUniversity(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/changefakulty')
    async updateteFakulty(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/nickname')
    async updateNickname(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/statusinprofile')
    async updateStatusInProfile(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }

    @Put('/change/mainphoto')
    async updateMainPhoto(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5265${req.originalUrl}`);
    }
}