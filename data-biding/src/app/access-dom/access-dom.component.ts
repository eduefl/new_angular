import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-access-dom',
  templateUrl: './access-dom.component.html',
  styleUrls: ['./access-dom.component.css']
})
export class AccessDomComponent implements OnInit {

  constructor() { }
  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoImput',{read: false, static: false}) iternalInput: ElementRef;

  ngOnInit() {
  }

  incrementa()
  {
    console.log(this.iternalInput.nativeElement.value);
    this.iternalInput.nativeElement.value++;
    this.mudouValor.emit( {novoValor: this.valor, lalala:"aloo"});
  }
  decrementa()
  {
    this.iternalInput.nativeElement.value--;
    this.mudouValor.emit( {novoValor: this.valor});

  }

}
