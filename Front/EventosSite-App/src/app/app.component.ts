import { Component } from '@angular/core';

@Component({      //Este componente que esta criando a tag nova angular de app-root
  selector: 'app-root',   //nome da tag
  templateUrl: './app.component.html',  //caminho que referencia meu arquivo html
  styleUrls: ['./app.component.scss']   //caminho que referencia meu arquivo scss/css
})
export class AppComponent {       //Esse é o typescript do meu componente app-root, onde posso escrever o seu comportamento
  title = 'EventosSite-App';
}
