import {carActionType} from "../redusers/CarReduser";
import {carService} from "../../services";
import {ThunkAction} from "redux-thunk";
import {AppDispatch, AppStateType} from "../store";

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type CarsActionsTypes = ReturnType<PropertiesTypes<typeof carsActions>>

export type CarThunkType = ThunkAction<void, AppStateType, null, CarsActionsTypes>

export const carsActions = {
    setIsLoading: (isLoading: boolean) => ({type: carActionType.SET_ISLOADING, payload: isLoading}),
    setError: (error: string) => ({type: carActionType.SET_ERROR, payload: error}),
    setIsCarUpdate: (isCarUpdate: boolean) => ({type: carActionType.SET_IS_CAR_UPDATE, payload: isCarUpdate}),
    getCars: (data: {}) => ({type: carActionType.GET_CARS, payload: data}),
    getCarById: (id: number ) => ({type: carActionType.GET_CAR_BY_ID, payload: id}),
    removeCarById: (id: number ) => ({type: carActionType.REMOVE_CAR_BY_ID, payload: id}),
    setCar: (data: {}) => ({type: carActionType.SET_CAR, payload: data}),
    setUpdateCar: (id: number, data: {}) => ({type: carActionType.SET_UPDATE_CAR, payload: {id, data}}),
    resetUpdatedCar: () => ({type: carActionType.RESET_UPDATED_CAR}),
}

export const getAllCars = (): CarThunkType => (dispatch: AppDispatch) => {
    dispatch(carsActions.setIsLoading(true));
    carService.getAll()
        .then(res => dispatch(carsActions.getCars(res.data)))
        .catch(err => dispatch(carsActions.setError((err))))
        .finally(() => dispatch(carsActions.setIsLoading(false)))
}

export const getByIdCar = (id: number ): CarThunkType => (dispatch: AppDispatch) => {
    dispatch(carsActions.setIsLoading(true));
    carService.getById(id)
        .then((res) => dispatch(carsActions.getCarById(res.data)))
        .catch(err => dispatch(carsActions.setError((err))))
        .finally(() => dispatch(carsActions.setIsLoading(false)))
}
export const addCar = (data: {}): CarThunkType => (dispatch: AppDispatch) => {
    dispatch(carsActions.setIsLoading(true));
    carService.postOne(data)
        .then(res => {
            dispatch(carsActions.setCar(res.data));
        })
        .catch(err => dispatch(carsActions.setError((err))))
        .finally(() => dispatch(carsActions.setIsLoading(false)))
}

export const updateCar = (id: number, data: {}): CarThunkType => (dispatch: AppDispatch) => {
    dispatch(carsActions.setIsLoading(true));
    carService.updateById(id, data)
        .then(res => {
            dispatch(carsActions.setUpdateCar(id, res.data));

        })
        .catch(err => dispatch(carsActions.setError((err))))
        .finally(() => dispatch(carsActions.setIsLoading(false)))
}

export const removeByIdCar = (id: number): CarThunkType => (dispatch: AppDispatch) => {
    dispatch(carsActions.setIsLoading(true));
    carService.removeById(id)
        .then(() => dispatch(carsActions.removeCarById(id)))
        .catch(err => dispatch(carsActions.setError((err))))
        .finally(() => dispatch(carsActions.setIsLoading(false)))
}


