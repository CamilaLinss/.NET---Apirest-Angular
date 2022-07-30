import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesServices } from './restaurantes/restaurantes.services';
import { RestauranteDetalheComponent } from './restaurantes/restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurantes/restaurante-detalhe/menu/menu.component';
import { MenuItensComponent } from './restaurantes/restaurante-detalhe/menu-itens/menu-itens.component';
import { ShoppingCartComponent } from './restaurantes/restaurante-detalhe/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    MenuItensComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //config de rotas
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
