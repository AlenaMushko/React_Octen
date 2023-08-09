import { applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import carReduser from "./redusers/CarReduser";

const rootReduser = combineReducers({
    carReduser:carReduser,
})

const composeEnhancers = composeWithDevTools({
    trace:true,
    traceLimit:25,
})

const store =  createStore(rootReduser, composeEnhancers(applyMiddleware(thunk)));
export default store;
