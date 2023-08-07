import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import carReduser from "./redusers/CarReduser";

const rootReduser = combineReducers({
    carReduser:carReduser,
})

const composeEnhancers = composeWithDevTools({
    trace:true,
    traceLimit:25,
})

const store =  createStore(rootReduser);
export default store;
