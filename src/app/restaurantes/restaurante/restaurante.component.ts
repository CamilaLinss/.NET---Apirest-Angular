import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from './models/restaurante.model';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})

export class RestauranteComponent implements OnInit {
  //tipo que eu mesmo criei em uma interface - no TS eu não preciso de uma classe necessariamente, apenas d eum representação do dado, por isso posso usar apenas um objeto de interface
  @Input() restaurante:Restaurante

  constructor() { }

  ngOnInit() {
  }

}
