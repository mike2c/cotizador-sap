import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthWardService {

    constructor(public jwtHelper: JwtHelperService, public router: Router) { }

    canActivate(): boolean {

        const token = localStorage.getItem('token');

        if(!token){
            this.router.navigate(['login']);
            return false;
        }else{

            if(this.isAuthenticated()){
                return true;
            }else{
                this.router.navigate(['session-expired']);
                return false;
            }            
        }
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token');    
        return !this.jwtHelper.isTokenExpired(token);
    }

}