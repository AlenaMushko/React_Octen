import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue, isPending} from "@reduxjs/toolkit";
import {characterService} from "../../services";
import {all} from "../episodes/slice";

const initialState = {
    characters: [],
    isLoading: false,
    error: null,
};

export const byId = createAsyncThunk(
    'charactersSlice/all',
    //  async (payload,thunkAPI)
    async (_, thunkAPI) => {
        try {
            const data = await characterService.getById();
            return data;
        } catch (err){
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)


const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(all.fulfilled, (state,{payload})=>{
                state.characters =payload
            })
            .addMatcher(isPending(), state => {
                state.isLoading=true
                state.error =null
            })
            .addMatcher(isFulfilled(), state => {
                state.isLoading=false
                state.error =null
            })
            .addMatcher(isRejectedWithValue(), (state,{payload}) => {
                state.isLoading=false
                state.error =payload
            })
})

const {reducer: characterReduser, actions} = charactersSlice;
const characterActions = {
    byId,
};

export {
    characterReduser,
    characterActions,
}
