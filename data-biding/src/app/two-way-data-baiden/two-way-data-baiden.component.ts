import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-baiden',
  templateUrl: './two-way-data-baiden.component.html',
  styleUrls: ['./two-way-data-baiden.component.css']
})
export class TwoWayDataBaidenComponent implements OnInit {

  nome: string  = 'abc';

  pessoa: any = {
    nome: 'jef',
    idade: 20

  }

  constructor() { }

  ngOnInit() {
  }

}
