import {carActionType} from "../redusers/CarReduser";

export const carsActions ={
    setCars:(data) =>({type:carActionType.SET_CARS, payload:data}),
    setIsLoadyng:(isLoading) =>({type:carActionType.SET_ISLOADING, payload:isLoading}),
 }

