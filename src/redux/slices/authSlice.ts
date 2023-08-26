import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IAuth, IUser} from "../../interfaces";
import {AxiosError} from "axios";
import {authService} from "../../services";

interface ISate {
    errorsRegister: {
        username?: string[],
        detail?: string
    },
    owner: IUser
};

const initialState: ISate = {
    errorsRegister: null,
    owner: null
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

const login = createAsyncThunk<IUser, { user: IAuth }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user);
        } catch (err) {
            const error = err as AxiosError;
            return rejectWithValue(error.response.data)
        }
    }
);

const owner = createAsyncThunk<IUser, void>(  //<IUser, void> = <повертаємо, приймаємо>
    'authSlice/owner',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.owner();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const logout = createAsyncThunk<void, void>(
    'authSlice/logout',
    async (_, {rejectWithValue}) => {
        try {
            authService.deleteTokens();
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const authSlice = createSlice({
        name: 'authSlice',
        initialState,
        reducers: {},
        extraReducers: builder => builder
            .addCase(login.fulfilled, (state, {payload}) => {
                state.owner = payload
            })
            .addCase(owner.fulfilled, (state, {payload}) => {
                state.owner = payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.owner = null;
            })
            .addMatcher(isRejected(), (state, {payload}) => {
                state.errorsRegister = payload;
            })
            .addMatcher(isFulfilled(), state => {
                state.errorsRegister = null;
            })
    })
;

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    register,
    login,
    owner,
    logout
};

export {
    authActions,
    authReducer
}
