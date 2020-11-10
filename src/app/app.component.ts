import { decrementar, incrementar } from './contador/contador.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contador-redux';

  // contador: number;
  contador$: Observable<number>
  constructor(
    private store: Store<AppState>
  ) {
    // this.contador = 0
    this.contador$ = store.select('contador');
  }

  ngOnInit() {
    // this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  incrementar() {
    this.store.dispatch(incrementar())
  }

  decrementar() {
    this.store.dispatch(decrementar())
  }
}
