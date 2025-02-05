import { Controller, HttpCode, HttpStatus, Post,Body, Get, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { request } from 'http';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() input: { username: string; password: string}){
        return this.authService.authenticate(input);
    }

    @UseGuards(AuthGuard)
    @Get('me')
    getUserInfo( @Request() request) {
        return request.user;      // Assuming the 'AuthGuard' adds a 'user' property to the request object
    }
}
