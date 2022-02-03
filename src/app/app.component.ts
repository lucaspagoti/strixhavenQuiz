import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(QuizFormComponent) child: any;
  pontosTotal: number = 0;
  matTab: number = 0;
  formGroup = new FormGroup({
    corFavorita: new FormControl(), 
    corajosa:  new FormControl(),
    sabeTi: new FormControl(),
    estudiosa: new FormControl()
  }) 
  title = 'strixQuiz';

  avancar(){
    this.matTab=this.matTab+1
    console.log(this.pontosTotal)
  }
  retornar(){
    this.matTab=this.matTab-1
  }

  ngAfterViewInit() { this.pontosTotal = this.child.pontosTotal }
  
}
