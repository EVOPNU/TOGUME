import { Controller, Get, Res, Req, Delete, Post, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/images/')
export class ImagesController {
    
    @Get('')
    async getRedirect(@Req() req, @Res() res) {
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

    @Get('/byImageId/:id/')
    async GetByImageId(@Req() req, @Res() res) {
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

    @Get('/byNewsId/:id/')
    async GetByNewsId(@Req() req, @Res() res) {
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

    @Delete(':id')
    async DeleteRedirect(@Req() req, @Res() res) {
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

    @Post('')
    async PostRedirect(@Req() req, @Res() res) {
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