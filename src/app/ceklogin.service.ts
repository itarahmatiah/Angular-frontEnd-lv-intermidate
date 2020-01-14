import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class CekLoginGuard implements CanActivate{
    
    constructor(
        private authService : AuthService,
        private router : Router
    ){

    }
    canActivate() {
        console.log('Sudah login '+this.authService.sudahLogin());
        if(this.authService.sudahLogin()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    
}