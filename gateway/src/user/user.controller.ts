import { Controller, Res, Put, Req, Get, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/user/account/')
export class UserController {

    @Put('/change/password/')
    async changePassword(@Req() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get(':id')
    async getUserById(@Req() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/firstname/')
    async changeFistName(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/lastname/')
    async changeLastName(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/thirdname/')
    async changeThirdName(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/birthday/')
    async changeBirthday(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/groupuniversity/')
    async changeGroupUniversity(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/changefakulty/')
    async changeFakulty(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/nickname/')
    async changeNickname(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/statusinprofile/')
    async changeStatusInProfile(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/mainphoto/')
    async changeMainPhoto(@Res() req, @Res() res) {
        return await fetch('http://localhost:5113/api/v1/authorization').then(async response => {
            if(response.status == 200) {
                res.set('Id', response.headers.get('Id'));
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
}