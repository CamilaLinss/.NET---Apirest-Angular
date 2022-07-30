import { Restaurante } from "./restaurante/models/restaurante.model";
import {endpoint_api_mock} from "../../environments/environment"
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import { ErrorHandler } from "../app.error";

@Injectable()
export class RestaurantesServices{

        constructor(private http:Http){}


        //TRAZ APENAS UM RESTAURANTE BUSCANDO POR ID
        //Serviço sendo usado no componente de detalhe-restaurante
        RestauranteId(id:string):  Observable<Restaurante> {

            //aqui sera retornado o objeto tipo observable response, mas precisamos de observable restaurante
            let response = this.http.get(`${endpoint_api_mock}/restaurants/${id}`)
                             .map(retorno => retorno.json()) //transformo esse observable<response> em um json
                             .catch(ErrorHandler.handleError) //Ao acontecer o erro a operação do observable sera interrompida, porem ainda temos que retornar um tipo Observable
                                        //Aqui fizemos uma classe de tratamento (como uma exception personalizada mas não exatamente) uma classe onde fazemos fazer uma tratativa
                                            //dos erros - ErrorHandler

            return response
        }



        //TRAZ A LISTA DE RESTAURANTES
        //Serviço sendo usado no componente de restaurantes
        ListaRestaurantes(): Observable<Restaurante[]> { // tipo retornando - Restaurante

            //aqui sera retornado o objeto tipo observable response, mas precisamos de observable restaurante
            let response = this.http.get(`${endpoint_api_mock}/restaurants`)
                             .map(retorno => retorno.json()) //transformo esse observable<response> em um json
                             .catch(ErrorHandler.handleError) //Ao acontecer o erro a operação do observable sera interrompida, porem ainda temos que retornar um tipo Observable
                                        //Aqui fizemos uma classe de tratamento (como uma exception personalizada mas não exatamente) uma classe onde fazemos fazer uma tratativa
                                            //dos erros - ErrorHandler

            return response
        }



        //MOCK
        //metodo
        //ListaRestaurantes(): Restaurante[] { // tipo retornando - Restaurante

            //mock dos dados dos restaurantes que iriam vir de um backend
           // return [{nome: "Sal e Pimenta", avaliacao: 4.5, imagePath: "assets/img/restaurants/tasty.png", descricao: "muito sal com pimenta"},
            //{nome: "hamburgue quente", avaliacao: 5.5, imagePath: "assets/img/restaurants/burgerhouse.png"},
            //{nome: "sorvete bao", avaliacao: 3.5, imagePath: "assets/img/restaurants/icy.png"}]
       // }


}