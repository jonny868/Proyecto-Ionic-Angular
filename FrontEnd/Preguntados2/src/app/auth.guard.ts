import { Injectable } from '@angular/core';
import {CanActivate,Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Injectable({
  providedIn: 'root'
})

//authguard protege las rutas desde el front end
//revisando si existe un token en el header
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService){}
  canActivate(): boolean{
    if (this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
 }
