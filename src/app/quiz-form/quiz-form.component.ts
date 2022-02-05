import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})


export class QuizFormComponent implements OnInit {

peso: number = 0;




@Input() set clickPergunta(peso: number){
  this.peso = peso;
} 
@Input() pergunta: { texto: string, respostas: { texto: string, peso: number }[], key: string };
@Output() resposta = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {    
  }

  somaPonto(key: string, peso: number){
    this.resposta.emit({ key, peso });
    this.peso = peso;    
  }

}
