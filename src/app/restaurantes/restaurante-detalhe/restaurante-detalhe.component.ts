import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from '../restaurante/models/restaurante.model';
import {RestaurantesServices} from '../restaurantes.services';

@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {

  restaurante: Restaurante

  constructor(private restaurantesServices: RestaurantesServices, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

        //subscribe para que sempre que aquele metodo gerar um evento, este evento seja retornado

        this.restaurantesServices.RestauranteId(this.activeRoute.snapshot.params['idRestaurante']) //Para saber qual id esta sendo acessado, deveremos acessar a rota ativa no momento, para isso utilizamos
                      // a injeção de dependencia ActivatedRoute e usamos seu metodo de snapshot (LEIA SOBRE SNAPSHOT E OBSERVABLE NAS ANOTAÇÕES SOBRE ANGULAR) pois o id vai ser
                      // um parametro fixo na nossa url (rota) - ATENÇÃO: Esse 'idRestaurante' é o nome do parametro que dei na tabela de rotas para esse item, se fosse outro nome, eu teria
                      // que adicionar aqui

        .subscribe(restaurante_json => this.restaurante = restaurante_json)
                  //observe que eu pego o valor retornado (que chamei de restaurante_json) e falo que o atributo 'restaurante' do meu componente vai receber esse resultado 'restaurante_json'


  }

}
