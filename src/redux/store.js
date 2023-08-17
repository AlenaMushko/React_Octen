import {configureStore} from "@reduxjs/toolkit";

import {episodeReduser} from "./episodes/slice";
import {characterReduser} from "./characters/slise";

export const store = configureStore({
    reducer: {
        episode: episodeReduser,
        character: characterReduser,
    }
});


