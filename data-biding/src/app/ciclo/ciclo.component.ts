import { AfterContentChecked, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck,AfterContentChecked, AfterContentChecked, AfterViewChecked, OnDestroy {

  constructor() { }

  @Input() capitalInicial = 10;


  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');

  }

  ngDoCheck(){
    console.log('ngDoCheck');

  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

  }


}
