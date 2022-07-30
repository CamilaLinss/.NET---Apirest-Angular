
import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class ErrorHandler {

    //vamos criar uma classe estatica para tratamento de erros no projeto, pois vamos utilizar em varias partes do projeto
    static handleError(error: Response | any){ //definindo que vamos receber um parametro do tipo Response OU do tipo any (ou seja qualquer um)

        let errorMessage: string

        if (error instanceof Response){ //instanceof - se error é do tipo Response 

            errorMessage = `Erro: ${error.status} ao obter a url ${error.url} - ${error.statusText}` // Se for do tipo Response, é feito uma mensagem mais personalizada
        }else{

            error.ToString() // Se for qualquer outro tipo de erro, ele simplesmente o converte em string para passar o texto
        }

        console.log(errorMessage)
        return Observable.throw(errorMessage) // Lembrando que esse metodo é para retornar throws mas com o tipo Observable

    }


}