import { dividir } from './../contador.actions';
import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    this.store.dispatch(multiplicar({ numero: 2 }));
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.store.dispatch(dividir({ numero: 2 }));
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }

  reset(numero: number) {
    // this.contador = numero;
    // this.cambioContador.emit(this.contador)
  }

}
