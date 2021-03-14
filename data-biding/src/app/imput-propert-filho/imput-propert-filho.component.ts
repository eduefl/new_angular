import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imput-propert-filho',
  templateUrl: './imput-propert-filho.component.html',
  styleUrls: ['./imput-propert-filho.component.css']// ,
  // inputs:['nomeAlterado:nome'] // Funciona mas nao deve ser usado assim e o mesmo que @Input

})
export class ImputPropertFilhoComponent implements OnInit {

  @Input('nome') nomeAlterado: string = '';
  constructor() { }

  ngOnInit() {
  }

}
