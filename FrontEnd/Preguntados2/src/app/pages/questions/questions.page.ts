import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  constructor(public questionsService: QuestionsService) { }

  ngOnInit() {
    this.play();
  }
  async play(){
    await this.questionsService.getQuestions().subscribe(
      (res)=>{
        this.questionsService.question = res;
        console.log(this.questionsService.question);
      },
      (err)=> {console.error(err);
      }
    );
  }
}
