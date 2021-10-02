import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    //Declara um componente principal - AppComponent é uma classe, que esta
                    //no arquivo de mesmo nome
  ],
  imports: [
    BrowserModule,    //Importes
    AppRoutingModule  //AppRouting é outra classe identificada pelo arquivo app-routing.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent] //Inicializar, dando um boot nesse componente
})
export class AppModule { }
