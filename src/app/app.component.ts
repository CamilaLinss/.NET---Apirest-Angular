import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  corpo = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
