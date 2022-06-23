import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Question } from 'src/models/questions';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  question: Question;
  private questionsURL = 'https://opentdb.com/api.php?amount=1';
  constructor(
    private  http: HttpClient,
    private  router: Router
    ) { }
    getQuestions(){
      return this.http.get<Question>(this.questionsURL);
      }
    }
