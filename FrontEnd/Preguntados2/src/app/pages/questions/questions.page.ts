import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/models/questions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  public data: any = [];

  constructor(public questionsService: QuestionsService) { }
   play(){
  this.questionsService.getQuestions().subscribe(res => {console.log(res[0].question);
  this.data = res;
  });
  }
  ngOnInit() {
    this.play();
  }
  //Crear un algoritmo para que la respuesta correcta salga en diferente posicion
  shuffle(){
    this.data[0].correct_answer = [];
  }
}
