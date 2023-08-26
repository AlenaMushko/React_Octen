import {
    createAsyncThunk,
    createSlice,
    isPending,
    isFulfilled,
    isRejectedWithValue,
    PayloadAction
} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar, IPagination} from "../../interfaces";
import {carService} from "../../services/carService";
import {RootState} from "../store";

interface IState {
    cars: ICar[],
    totalItems: number,
    totalPages: number,
    carrentPage:  number,
    carrentSize: number,
    carForUpdate: ICar | null,
    isLoading: boolean,
    error: any | null,
}

const initialState: IState = {
    cars: [],
    totalItems: null,
    totalPages: null,
    carrentPage: null,
    carrentSize: null,
    carForUpdate: null,
    isLoading: false,
    error: null,
};

const getAll = createAsyncThunk<{data: IPagination<ICar>, page:number, page_size:number }, { page: number, page_size: number }>(
    'carsSlice/getAll',
    async ({page, page_size}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll(page, page_size);
            return {data, page, page_size}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const create = createAsyncThunk<ICar, { car: ICar }>(
    'carsSlice/create',
    async ({car}, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.create(car)
           const {cars:{carrentPage, carrentSize}} = getState() as RootState;
            dispatch(getAll({page:carrentPage, page_size:carrentSize}))
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const update = createAsyncThunk<ICar, { id: number, car: ICar }>(
    'carsSlice/update',
    async ({id, car}, {rejectWithValue, dispatch, getState}) => {
        try {
            const response = await carService.updateById(id, car);
            const updatedCar = response.data; // Assuming the updated car is returned in the response data.
            const {cars:{carrentPage, carrentSize}} = getState() as RootState;
            dispatch(getAll({page:carrentPage, page_size:carrentSize}));
            return updatedCar;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteCar = createAsyncThunk<void, { id: number }>(
    'carsSlice/deleteCar',
    async ({id}, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.deleteById(id)
            const {cars:{carrentPage, carrentSize}} = getState() as RootState;
            dispatch(getAll({page:carrentPage, page_size:carrentSize}))
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<{ car: ICar }>) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, {payload}) => {
            state.cars = payload.data.items
            state.totalItems = payload.data.total_items
            state.totalPages = payload.data.total_pages
            state.carrentPage = payload.page
            state.carrentSize =payload.page_size
        })
        .addCase(update.fulfilled, (state, {payload}) => {
            state.carForUpdate = null
            const updatedCar = payload
            const index = state.cars.findIndex(car => car.id === updatedCar.id);
            if (index !== -1) {
                state.cars.splice(index, 1, updatedCar);
            }
        })
        .addMatcher(isPending(), state => {
            state.isLoading = true
            state.error = null
        })
        .addMatcher(isFulfilled(), state => {
            state.isLoading = false
            state.error = null
        })
        .addMatcher(isRejectedWithValue(), (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
})

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar,
}

export {
    carActions,
    carReducer
}
