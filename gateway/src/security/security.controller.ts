import { Controller, Get, Req, Res } from "@nestjs/common";


@Controller('/api/v1/authorization/')
export class SecurityController {

    @Get('/')
    valid(@Req() req, @Res() res) {
        return res.redirect(307, `http://localhost:3001${req.originalUrl}`);
    }
}