import { Controller, Post, Req, Res, Get, HttpStatus } from "@nestjs/common";
import fetch from "node-fetch";

@Controller('/api/v1/Groups/')
export class GroupsController {

    @Post('/create/')
    async createGroup(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Post('/update/:sender')
    async sender(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });  
    }

    @Get('/add/:acess/:groupID/:userID/')
    async addUser(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/us/:userid')
    async GetByUserId(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/request/:groupid/:userid/')
    async request(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/invge/:groupid/:sender/')
    async listRequest(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/invus/:userid')
    async usersInvites(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/not/:groupid/:userid')
    async deleteRequest(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/right/:groupid/:userid/:sender')
    async getRight(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/delete/:groupid/:userid/:sender')
    async deleteUser(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/exterminatus/:groupid/:sender')
    async removeGroup(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/gr/:groupid')
    async GetDataGroup(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/ingroup/:groupid')
    async UsersOfGroup(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/allgroups/')
    async allGroups(@Req() req, @Res() res) {
        await fetch('http://localhost:5000/api/v1/user/account/').then(response => {
            if(response.status == 200) {
                return  res.redirect(307, `http://localhost:3001${req.originalUrl}`);
            }
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/us/:userID')
    async usersGroup(@Req() req, @Res() res) {
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