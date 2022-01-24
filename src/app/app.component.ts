import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  }
  retornar(){
    this.matTab=this.matTab-1
  }

}
