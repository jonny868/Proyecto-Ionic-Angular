import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-mode',
  templateUrl: './play-mode.page.html',
  styleUrls: ['./play-mode.page.scss'],
})
export class PlayModePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  normal(){
    this.router.navigate(['/questions']);
  }
}
