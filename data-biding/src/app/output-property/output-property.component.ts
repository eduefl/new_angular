import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs:['mudouValor'] also works but should not be used
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  incrementa()
  {
    this.valor++;
    this.mudouValor.emit( {novoValor: this.valor, lalala:"aloo"});
  }
  decrementa()
  {
    this.valor--;
    this.mudouValor.emit( {novoValor: this.valor});

  }

  constructor() { }

  ngOnInit() {
  }

}
