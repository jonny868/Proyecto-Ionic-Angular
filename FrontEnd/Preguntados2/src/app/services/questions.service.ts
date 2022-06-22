import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questionsURL = 'https://opentdb.com/api.php?amount=10';
  constructor(
  private  http: HttpClient,
  private  router: Router
  ) { }
    getQuestions(){
      return this.http.get(this.questionsURL).subscribe(
        res =>{
          console.log(res);
        }
      );
    }
}
