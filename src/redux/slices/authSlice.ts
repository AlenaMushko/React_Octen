import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces";
import {AxiosError} from "axios";
import {authService} from "../../services";

interface ISate {
    errorsRegister: {
        username?: string[]
    }
};

const initialState: ISate = {
    errorsRegister: null
};

const register = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user);
        } catch (err) {
            const error = err as AxiosError;
            return rejectWithValue(error.response.data)
        }
    }
);
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(isRejected(), (state, {payload}) => {
            state.errorsRegister = payload;
        })
        .addMatcher(isFulfilled(), state => {
            state.errorsRegister = null;
        })
});

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    register
};

export {
    authActions,
    authReducer
}
