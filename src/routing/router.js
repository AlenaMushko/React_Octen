import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";

import {AppRoutes} from "./appRoutes";
import {AppLayout, Error} from "../components";
import {EpisodesPage, HomePage, CharactersPage} from "../pages";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: AppRoutes.HOME,
                element: (
                   <HomePage/>
                ),
            },
            {
                path: AppRoutes.EPISODES,
                element: <EpisodesPage/>,
            },
            {
                path: AppRoutes.CHARACTERS,
                element: <CharactersPage/>,
            },
            {
                path: "*",
                element: <Error/>,
            },
        ]
    }
]);
