import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorInicial = 15
  title = 'data-biding';
  onMudouValor(evento)
  {
    console.log(evento.novoValor);

  }
}
