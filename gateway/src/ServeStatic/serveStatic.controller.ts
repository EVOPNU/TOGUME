import { Controller, Get, Req, Res, HttpStatus, Headers } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('')
export class ServeStaticController{

    @Get(':image')
    async GetRedirect(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://localhost:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
}