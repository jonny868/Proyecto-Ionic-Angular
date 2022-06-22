import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {
    email:'',
    password:''
  };
  constructor(public authService: AuthService){ }

  ngOnInit() {
  }

  login(){
    this.authService.loginUser(this.user);
  }

}
