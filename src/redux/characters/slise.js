import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue, isPending} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: [],
    idArr: [],
    isLoading: false,
    error: null,
};

export const byId = createAsyncThunk(
    'charactersSlice/all',
    //  async (payload,thunkAPI)
    async (id, thunkAPI) => {
        try {
            const {data} = await characterService.getById(id);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)


const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
        setIdArr: (state, {payload}) => {
            state.idArr = payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(byId.fulfilled, (state, {payload}) => {
                state.characters.push(payload);
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

const {reducer: characterReduser, actions} = charactersSlice;
const {setIdArr} = actions;

const characterActions = {
    byId,
};

export {
    characterReduser,
    characterActions,
    setIdArr
}
