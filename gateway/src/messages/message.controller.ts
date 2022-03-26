import { Controller, Get, Res, Req, HttpStatus, Delete, Post, Put } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/message/')
export class MessageController {

    @Get('')
    async get(@Req() req, @Res() res) {
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
    async getById(@Req() req, @Res() res) {
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
    async delete(@Req() req, @Res() res) {
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
    async post(@Req() req, @Res() res) {
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

    @Put('')
    async put(@Req() req, @Res() res){
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