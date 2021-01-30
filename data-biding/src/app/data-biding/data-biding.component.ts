import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css'],
})
export class DataBidingComponent implements OnInit {
  cUrl =
    'https://pt.stackoverflow.com/questions/326021/qual-a-diferen%C3%A7a-sem%C3%A2ntica-entre-section-e-article';
  lVarLog = true;

  cImage1 =
    'https://sportbuzz.uol.com.br/media/_versions/corinthians_p000Pmj_widexl.jpeg';

  cImage2 =
    'https://cidadeolimpica.com.br/wp-content/uploads/2020/09/corinthians-papel-parede3.jpg';

  urlImagem = 'https://i.picsum.photos/id/10/2500/1667.jpg';
  teste;

  constructor(private domSanitizer: DomSanitizer) {
    this.teste = this.domSanitizer.bypassSecurityTrustResourceUrl(this.cImage1);
  }

  ngOnInit() {}

  getValor() {
    return 1;
  }
  getBoolean() {
    return true;
  }
}
