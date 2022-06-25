import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Question } from 'src/models/questions';
@Injectable({
  providedIn: 'root'
})

export class QuestionsService {
  question: Question[];
  private questionsURL = 'https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple';
  constructor(private  http: HttpClient
    ) { }
     getQuestions(){
     return this.http.get<Question>(this.questionsURL).pipe(map(res => res.results));
    }
    }


    // return this.http.get<Question>(this.questionsURL);
