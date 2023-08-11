import { applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkDispatch} from 'redux-thunk';

import carReduser from "./redusers/CarReduser";
import {CarsActionsTypes} from "./actions/carsActions";

const rootReduser = combineReducers({
    carReduser:carReduser,
})

const composeEnhancers = composeWithDevTools({
    trace:true,
    traceLimit:25,
})

const store =  createStore(rootReduser, composeEnhancers(applyMiddleware(thunk)));

export type AppStateType= ReturnType<typeof  store.getState>
// export type AppDispatch = typeof store.dispatch; // що дав ментор не допомогло вирішит проблему із діспатчем carsActions
export type AppDispatch = ThunkDispatch<AppStateType, null, CarsActionsTypes>;

export default store;
