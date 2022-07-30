import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";

// cada componente descrito na rota deve ser importado
import { HomeComponent } from "./home/home.component";
import { RestauranteDetalheComponent } from "./restaurantes/restaurante-detalhe/restaurante-detalhe.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";

// !! Essas rotas precisam ser importadas e definidas no app.module

// array de rotas
// definindo ação e destino de cada caminho da pagina
export const ROUTES: Routes = [

    //quando nenhum caminho for ativado, o modulo principal estara ativado - ou seja ao entrar na pagina seria o primeiro component a aparecer
    {path: '', component: HomeComponent},

    // quando minha url tiver about no final, ele vai entender que precisa mostrar o componente de about
    {path: 'about', component: AboutComponent},
    {path: 'restaurantes', component: RestaurantesComponent},

    //componente com id - nesse caso temos uma rota para quando clicar no restaurante, ele vá para o detalhe, porem esse restaurante tem um id, para representar ele na url e assim levar
    //para sua pagina
    {path: 'restaurantes/:idRestaurante', component: RestauranteDetalheComponent}


]