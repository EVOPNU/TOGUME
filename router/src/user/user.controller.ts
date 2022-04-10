import { Controller, Res, Put, Req, Get, HttpStatus, UseInterceptors, Body } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import fetch from "node-fetch";
import * as FormData from 'form-data';

@Controller('/api/v1/user/account/')
export class UserController {

    @Put('/change/password/')
    async changePassword(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Get('')
    async getUserById(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/firstname')
    async updateFirstName(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/lastname')
    async updateLastName(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/thirdname')
    async updateThirdName(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/birthday')
    async updateBirthday(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/groupuniversity')
    async updateGroupUniversity(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/changefakulty')
    async updateteFakulty(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/nickname')
    async updateNickname(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/statusinprofile')
    async updateStatusInProfile(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:5262${req.originalUrl}`);
    }

    @Put('/change/mainphoto')
    @UseInterceptors(FileInterceptor('image'))
    async updateMainPhoto(@Req() req, @Res() res, @Body() body) {
        let formData = new FormData();
        formData.append('image', JSON.stringify(body));
        fetch(`http://localhost:5262${req.originalUrl}`, {
            method: 'PUT',
            body: formData
        }).then(response2 => {
            return res.status(response2.status).json(response2.json());
        });
    }
}