import { Controller, Post, Req, Res, Get, HttpStatus } from "@nestjs/common";

@Controller('/api/v1/Groups/')
export class GroupsController {

    @Post('/create/')
    async createGroup(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Post('/update/:sender')
    async sender(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`); 
    }

    @Get('/add/:acess/:groupID/:userID/')
    async addUser(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/us/:userid')
    async GetByUserId(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/request/:groupid/:userid/')
    async request(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/invge/:groupid/:sender/')
    async listRequest(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/invus/:userid')
    async usersInvites(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/not/:groupid/:userid')
    async deleteRequest(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/right/:groupid/:userid/:sender')
    async getRight(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/delete/:groupid/:userid/:sender')
    async deleteUser(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/exterminatus/:groupid/:sender')
    async removeGroup(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/gr/:groupid')
    async GetDataGroup(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/ingroup/:groupid')
    async UsersOfGroup(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/allgroups/')
    async allGroups(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }

    @Get('/us/:userID')
    async usersGroup(@Req() req, @Res() res) {
        return  res.redirect(307, `http://localhost:5062${req.originalUrl}`);
    }
}