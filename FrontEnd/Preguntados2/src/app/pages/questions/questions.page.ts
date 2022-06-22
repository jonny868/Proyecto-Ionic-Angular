import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  question: any = {
    question:'',
    correctAnswer:'',
    incorrectAnswers:[]
  };
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.play();
  }
  play(){
    this.questionsService.getQuestions();
  }
}
