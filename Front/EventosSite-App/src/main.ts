import { enableProdMode } from '@angular/core';   //Importes do angula
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';   //caminho que esta o app.module
import { environment } from './environments/environment'; //Ambiente

//Tratativa importante para pegar o arquivo do ambiente
//Se o ambiente for produção(se o arquivo enviroment.ts tiver o parametro production como true) ele habilita o modo de produção
if (environment.production) {
  enableProdMode();
}


//Startando nosso projeto utilizando o AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));  //Captura o erro em qualquer problema de inicialização
