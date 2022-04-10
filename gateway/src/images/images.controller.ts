import { Controller, Get, Res, Req, Delete, Post, HttpStatus, Headers, UploadedFile, Body, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from 'express';
import fetch from "node-fetch";
import * as FormData from 'form-data';
// import { HttpService } from "@nestjs/comon";

@Controller('/api/v1/images/')
export class ImagesController {
    
    @Get('')
    async getRedirect(@Req() req, @Res() res, @Headers() headers) {
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

    @Get('/byImageId/:id/')
    async GetByImageId(@Req() req, @Res() res, @Headers() headers) {
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

    @Get('/byNewsId/:id/')
    async GetByNewsId(@Req() req, @Res() res, @Headers() headers) {
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

    @Delete(':id')
    async DeleteRedirect(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://localhost:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://localhost:3001${req.originalUrl}`, {
                    method: 'POST',
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

    @Post(':news_id')
    @UseInterceptors(FileInterceptor('image'))
    async PostRedirect(@Req() req, @Res() res: Response, @Headers() headers, @UploadedFile() image) {
        await fetch('http://localhost:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                let formData = new FormData();
                formData.append('image', JSON.stringify(image));
                fetch(`http://localhost:3001${req.originalUrl}`, {
                    method: 'POST',
                    headers: {'Id':`${response.headers.get('Id')}`},
                    body: formData
                }).then(response2 => {
                    return res.status(response2.status).json(response2.json());
                });
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

}