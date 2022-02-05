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
  perguntas = [
    { texto: "Qual a sua cor favorita?", respostas: [{texto: 'azul', peso: 1}, {texto: 'roxo', peso: 2} , {texto: 'verde', peso: 3}], key: "corFavorita" }, 
    { texto: "Você é corajoso?", respostas: [{texto: 'Sim', peso: 1}, {texto: 'Não', peso: 2}], key:"corajosa" },
    { texto: "Você sabe TI?", respostas: [{texto: 'Sim', peso: 1}, {texto: 'Não', peso: 2}], key:"sabeTi" },
    { texto: "Você é estudioso?", respostas: [{texto: 'Sim', peso: 1}, {texto: 'Não', peso: 2}], key:"estudiosa" },
   ]

  title = 'strixQuiz';



  avancar(){
    this.matTab=this.matTab+1
    console.log(this.pontosTotal)
  }
  retornar(){
    this.matTab=this.matTab-1
  }

  salvarResposta(evento:{ key: string, peso:number } ){
    this.formGroup.get(evento.key).setValue(evento.peso)
   
   ///quando aumentar as perguntas, aumentar esse matTab
    if (this.matTab === 3){
      let soma = 0 
      const getRaw = this.formGroup.getRawValue();
      
      for(const chave in getRaw){
        soma += getRaw[chave]
      }
      
    } 
  }

  ngAfterViewInit() { this.pontosTotal = this.child.pontosTotal }
  
}
