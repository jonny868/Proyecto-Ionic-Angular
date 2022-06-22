import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any = {
    email:'',
    password:''
  };
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  register(){
    this.authService.signUp(this.user);
  }
}
