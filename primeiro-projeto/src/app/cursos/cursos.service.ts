import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class CursosService {

  constructor() { }

  getCursos() {
    let aret: string[];

    aret = ['advpl', 'atusx', 'Romeno', 'Bucareste'];

    return aret;
  }
}
