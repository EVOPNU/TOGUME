import { Controller, Get, Req, Res, HttpStatus, Headers } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/message/admin/')
export class MessageAdminController {

    @Get('')
    async get(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://localhost:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://localhost:3001${req.originalUrl}`, {
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
        await fetch('http://localhost:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://localhost:3001${req.originalUrl}`, {
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
}