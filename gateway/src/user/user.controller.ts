import { Controller, Res, Put, Req, Get, HttpStatus, Headers, Body, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';
import * as FormData from 'form-data';
import fetch from "node-fetch";

@Controller('/api/v1/user/account/')
export class UserController {

    @Put('/change/password/')
    async changePassword(@Req() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('')
    async getUserById(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`},
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

    @Put('/change/firstname/')
    async changeFistName(@Res() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/lastname/')
    async changeLastName(@Res() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/thirdname/')
    async changeThirdName(@Res() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/birthday/')
    async changeBirthday(@Res() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/groupuniversity/')
    async changeGroupUniversity(@Res() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/changefakulty/')
    async changeFakulty(@Res() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/nickname/')
    async changeNickname(@Res() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/statusinprofile/')
    async changeStatusInProfile(@Res() req, @Res() res, @Headers() headers, @Body() body) {
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
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Put('/change/mainphoto/')
    @UseInterceptors()
    async changeMainPhoto(@Res() req, @Res() res, @Headers() headers, @Body() body, @UploadedFile() image) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                let formData = new FormData();
                formData.append('image', JSON.stringify(image))
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'PUT',
                    headers: {'Id' : `${response.headers.get('Id')}`},
                    body: formData
                }).then(response2 => {
                    return res.status(response2.status).send({});
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
}