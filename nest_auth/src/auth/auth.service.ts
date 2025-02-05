import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { promises } from 'dns';
import { UsersService } from 'src/users/users.service';

type AuthInput = {username: string; password: string};
type SignInData = {userId: number; username: string};
type AuthResult = { accessToken: string; userId: number; username: string };

@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService : JwtService
    ){}

    async authenticate(input: AuthInput): Promise<AuthResult> {  // takes arugument as authInput and  returns Authresult 
        const user = await this.validateUser(input);

        if(!user){
            throw new UnauthorizedException();
        }

        return this.signIn(user);
    }




    async validateUser(input: AuthInput): Promise<SignInData | null>{    // it will take input as AuthInput and return signIndata 
        const user = await this.userService.findUserByName(input.username)
        
        if(user && user.password === input.password){
            return {
                userId: user.userId,
                username:user.username,  
                // do not return the password
            };
        }

        return null;
    }

    async signIn(user: SignInData): Promise<AuthResult> {   // takes argument as signInData and returns  authResult object
        const tokenPayload = {
            sub: user.userId,
            username: user.username,
        };

        //after that we generate a jwt token by signing the tokenPayload using the jwtservice 
        const accessToken = await this.jwtService.signAsync(tokenPayload);

        // finally this method returns a authentication result with the accessToken,username userId
        return {accessToken, username : user.username , userId : user.userId};
    } 
}
