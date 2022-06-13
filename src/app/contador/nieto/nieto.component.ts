import { reset } from './../contador.actions';
import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();
  contador: number;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  reset() {
    this.store.dispatch(reset());
    // this.contador = 0;
    // this.cambioContador.emit(0);
  }
}
