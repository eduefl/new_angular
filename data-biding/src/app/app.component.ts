import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorInicial = 15
  title = 'data-biding';
  deletarCiclo = false;
  obliterar()
  {
    this.deletarCiclo = true;

  }
  mudaValor()
  {
    this.valorInicial++;

  }

  onMudouValor(evento)
  {
    console.log(evento.novoValor);

  }
}
