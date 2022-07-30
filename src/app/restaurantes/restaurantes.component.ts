import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/models/restaurante.model';
import {RestaurantesServices} from './restaurantes.services'

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[]

  //injeção de dependencia da classe RestaurantesServices
  constructor(private restaurantesServices: RestaurantesServices) { }


  //metodo que vai rodar primeiro quando o componente for chamado
  ngOnInit() { // METODO DE INICIO QUE SERA CHAMADO UMA VEZ NO CICLO DE VIDA DO MEU COMPONENTE - ou seja é o metodo ideal para ser feito a inicialização do serviço 

    //estou colocando o valor retornado do metodo ListaRestaurantes do serviço injetado no atributo restaurantes
    //this.restaurantes = this.restaurantesServices.ListaRestaurantes()

    //agora que o retorno do metodo ListaRestaurantes é um observable, consigo dar o subscribe para que sempre que aquele metodo gerar um evento, este evento seja retornado
    this.restaurantesServices.ListaRestaurantes()
          .subscribe(restaurantes_json => this.restaurantes = restaurantes_json) // a minha requisição http no metodo ListaRestaurantes so vai ser feito quando eu tiver um subscribe
                    //observe que eu pego o valor retornado (que chamei de restaurantes_json) e falo que o atributo 'restaurantes' do meu componente vai receber esse resultado 'restaurantes_json'


  }

}
