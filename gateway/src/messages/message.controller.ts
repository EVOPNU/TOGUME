import { Controller, Get, Res, Req, HttpStatus, Delete, Post, Put, Headers, Body } from "@nestjs/common";
import fetch from "node-fetch";
import { brotliCompressSync } from "zlib";

@Controller('/api/v1/message/')
export class MessageController {

    @Get('')
    async get(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    response2.json().then(data => {
                        res.set('Id', `${response.headers.get('Id')}`);
                        const status = response2.status;
                        return res.status(status).json(data);
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get(':id') 
    async getById(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    response2.json().then(data => {
                        res.set('Id', `${response.headers.get('Id')}`);
                        const status = response2.status;
                        return res.status(status).json(data);
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Delete(':id')
    async delete(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'DELETE',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Post('') 
    async post(@Req() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'POST',
                    headers: {'Id' : `${response.headers.get('Id')}`, 'Content-Type':'application/json'},
                    body: JSON.stringify(body)
                }).then(response2 => {
                    response2.json().then(data => {
                        res.set('Id', `${response.headers.get('Id')}`);
                        const status = response2.status;
                        return res.status(status).json(data);
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('')
    async put(@Req() req, @Res() res, @Headers() headers, @Body() body){
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: {'Id' : `${response.headers.get('Id')}`, 'Content-Type':'application/json'},
                    body: JSON.stringify(body)
                }).then(response2 => {
                    response2.json().then(data => {
                        res.set('Id', `${response.headers.get('Id')}`);
                        const status = response2.status;
                        return res.status(status).json(data);
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
}