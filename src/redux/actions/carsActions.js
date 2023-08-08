import {carActionType} from "../redusers/CarReduser";

export const carsActions ={
    getCars:(data) =>({type:carActionType.GET_CARS, payload:data}),
    setIsLoading:(isLoading) =>({type:carActionType.SET_ISLOADING, payload:isLoading}),
    removeCarById:(id) =>({type:carActionType.REMOVE_CAR_BY_ID, payload:id}),
    setCar:(data) =>({type:carActionType.SET_CAR, payload:data}),
    setUpdateCar:(id, data) =>({type:carActionType.SET_UPDATE_CAR, payload: {id, data}}),
    setIsCarUpdate:(isCarUpdate) =>({type:carActionType.SET_IS_CAR_UPDATE, payload:isCarUpdate}),
}

