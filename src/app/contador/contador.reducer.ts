import { Action, createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, multiplicar, reset, dividir } from './contador.actions';

export const initialState = 20;

const _contadorReducer = createReducer(
    initialState,
    on(incrementar, (state) => state + 1),
    on(decrementar, (state) => state - 1),
    on(multiplicar, (state, { numero }) => state * numero),
    on(dividir, (state, { numero }) => state / numero),
    on(reset, (state) => initialState)
);

export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}


// export function contadorReducer(state = 10, action: Action) {
//     switch (action.type) {
//         case incrementar.type:
//             return state + 1;
//         case decrementar.type:
//             return state - 1;
//         default:
//             return state;
//     }
// }