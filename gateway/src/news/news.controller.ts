import { Controller, Get, Put, Delete, Post, Req, Res, HttpStatus, Headers, Body } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/news/')
export class NewsController {

    @Get('')
    async getRedirect(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET',
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        console.log(err);
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/ByGroupId/:public_id')
    async GetByGroupIdRedirect(@Req() req, @Res() res, @Headers() headers) {
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
    async GetRedirect(@Req() req, @Res() res, @Headers() headers) {
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

    @Delete('')
    async DeleteRedirect(@Req() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'DELETE',
                    headers: {'Id' : `${response.headers.get('Id')}`, 'Content-Type':'application/json'},
                    body: JSON.stringify(body)
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
    async PostRedirect(@Req() req, @Res() res, @Headers() headers, @Body() body) {
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

    @Put(':id')
    async PutRedirect(@Req() req, @Res() res, @Headers() headers, @Body() body) {
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