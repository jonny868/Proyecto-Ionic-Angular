import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  playMode(){
    this.router.navigate(['/play-mode']);
  }

  logOutUser(){
    this.authService.logOut();
  }
}
