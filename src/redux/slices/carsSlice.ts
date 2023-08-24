import {createAsyncThunk, createSlice, isPending,isFulfilled, isRejectedWithValue, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar, IPagination} from "../../interfaces";
import {carService} from "../../services/carService";

interface IState {
    cars: ICar[],
    carForUpdate: ICar | null,
    isLoading: boolean,
    error:any | null,
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    isLoading: false,
    error:null,
};

const getAll = createAsyncThunk<IPagination<ICar>, void>(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const create = createAsyncThunk<void, { car: ICar }>(
    'carsSlice/create',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.create(car)
            dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const update = createAsyncThunk<void, { id: number, car: ICar }>(
    'carsSlice/update',
    async ({id, car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.updateById(id, car)
            await dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteCar = createAsyncThunk<void, { id: number }>(
    'carsSlice/deleteCar',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteById(id)
            await dispatch(getAll())
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
            state.cars = payload.items
        })
        .addCase(update.fulfilled, state => {
            state.carForUpdate = null
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
