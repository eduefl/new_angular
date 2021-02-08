import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biden',
  templateUrl: './event-biden.component.html',
  styleUrls: ['./event-biden.component.css']
})
export class EventBidenComponent implements OnInit {

  clicked = false;
  cValorAtual = '';
  cValorSalvo = '';
  lPaiTaOn = false;


  constructor() { }

  ngOnInit() {
  }

  clickDuButao(event){
    console.log(event);
    alert('butao clicado');
  }
  saiu(event)
  {
    console.log('saiu')

    if (this.clicked)
    {
      console.log('saiu clicado')
      console.log(event);


    }
  }
  sobemouse(event){

    this.clicked = false;
    alert('butao subido');

  }
  baixamouse(event)
  {
    alert('butao baxado');
    console.log(event);
    this.clicked = true;
  }
  movemouse(event){
    if (this.clicked) {
      console.log(event);
      alert('Movido');
    }

  }

  onKeyUp(event: KeyboardEvent){
    //alert((<HTMLInputElement>event.target).value);
    console.log((<HTMLInputElement>event.target).value);
    this.cValorAtual = (event.target as HTMLInputElement).value;
  }

  onSalvaValor(cValor){
    this.cValorSalvo = cValor;

  }

  onToBeOrNotToBe(){
    this.lPaiTaOn = !this.lPaiTaOn;

  }

}
