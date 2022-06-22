import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private serverUrl = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  signUp(user){
   return this.http.post<any>(this.serverUrl+'/register', user).subscribe(
    res => {
      console.log('worked', res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/main']);
    },
    err => console.error(err)
   );
  }

  loginUser(user){
    console.log('test');
    return this.http.post<any>(this.serverUrl+'/login', user).subscribe(
      res => {
        console.log('logged in');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/main']);
      },
      err => console.error(err)

    );
  }



  loggedIn(){
    
  }
}
