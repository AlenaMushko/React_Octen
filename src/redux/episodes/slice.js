import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue, isPending} from "@reduxjs/toolkit";
import {episodesService} from "../../services";


const initialState = {
    episodes: [],
    isLoading: false,
    error: null,
    page:1,
};

export const all = createAsyncThunk(
    'episodesSlice/all',
    //  async (payload,thunkAPI)
    async (page, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data.results;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)


const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        incrementPage: (state) => {
            if(state.episodes.length === 20){
                state.page += 1;
            }
        },
        decrementPage: (state) => {
            if (state.page > 1) {
                state.page -= 1;
            }
        }
    },
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.episodes = payload
            })
            .addMatcher(isPending(all), state => {
                state.isLoading = true
                state.error = null
            })
            .addMatcher(isFulfilled(all), state => {
                state.isLoading = false
                state.error = null
            })
            .addMatcher(isRejectedWithValue(all), (state, {payload}) => {
                state.isLoading = false
                state.error = payload
            })
})

const {reducer: episodeReduser, actions} = episodesSlice;

const { incrementPage, decrementPage } = actions;

const episodeActions = {
    all,
};

export
{
    episodeReduser,
    episodeActions,
    incrementPage,
    decrementPage
}
