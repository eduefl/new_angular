import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  TitApp: string ;
  Lista: string[] = []; // Declaracao de array

  constructor(private sCursosService: CursosService) {
    this.TitApp = 're-training' ;

    this.Lista =  this.sCursosService.getCursos() ;

    // let servico = new CursosService() ; modelo de instanciamento manual (nao usar)
  }

  ngOnInit() {
  }

}
