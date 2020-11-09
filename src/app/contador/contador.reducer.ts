import { Action, createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, reset } from './contador.actions';

export const initialState = 20;

const _contadorReducer = createReducer(
    initialState,
    on(incrementar, (state) => state + 1),
    on(decrementar, (state) => state - 1),
    on(reset, (state) => 0)
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