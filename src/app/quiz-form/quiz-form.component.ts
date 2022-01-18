import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
  public formGroup: FormGroup | undefined;

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
