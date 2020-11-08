import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador-redux';

  contador: number;
  constructor() {
    this.contador = 0
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
