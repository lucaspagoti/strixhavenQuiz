import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})


export class QuizFormComponent implements OnInit {
  
index: number = 0

perguntas = [
  { texto: "Qual a sua cor favorita?", respostas: [{texto: 'azul', peso: 1}, {texto: 'verde', peso: 2}], key: "corFavorita" }, 
  { texto: "Você é corajoso?", respostas: [{texto: 'Sim', peso: 1}, {texto: 'Não', peso: 2}], key:"corajosa" },
  { texto: "Você sabe TI?", respostas: [{texto: 'Sim', peso: 1}, {texto: 'Não', peso: 2}], key:"sabeTi" },
  { texto: "Você é estudioso?", respostas: [{texto: 'Sim', peso: 1}, {texto: 'Não', peso: 2}], key:"estudiosa" },
 ]

continuar() {
  this.index += 1
}

  
  @Input() 
  pergunta!: string; 
  @Input()
  key!: string;
  @Input()
  respostas!: { texto: string; peso: number; }[];
  @Output() setPesoFormulario = new EventEmitter<{peso: number, key: string}>();
  constructor() { }

  ngOnInit(): void {    
  }

  salvarPesoPergunta(peso: number) {
    this.setPesoFormulario.emit({key: this.key, peso: peso});

  }

}
