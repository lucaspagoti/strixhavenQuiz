import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formGroup = new FormGroup({
    corFavorita: new FormControl(), 
    corajosa:  new FormControl(),
    sabeTi: new FormControl(),
    estudiosa: new FormControl()
  }) 
  title = 'strixQuiz';
}
