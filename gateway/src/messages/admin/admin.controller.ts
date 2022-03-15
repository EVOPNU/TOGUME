import { Controller, Get, Req, Res, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/message/admin/')
export class MessageAdminController {

    @Get('')
    async get(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get(':id')
    async getById(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
}