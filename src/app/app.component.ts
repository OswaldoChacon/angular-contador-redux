import { decrementar, incrementar } from './contador/contador.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  contador: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contador-redux';

  contador: number;
  constructor(
    private store: Store<AppState>
  ) {
    this.contador = 0
  }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  incrementar() {
    this.store.dispatch(incrementar())
  }

  decrementar() {
    this.store.dispatch(decrementar())
  }
}
