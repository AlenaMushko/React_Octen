import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";

import {
    AnimationPage,
    MovieIdPage,
    MoviesPage, SoonPage, TvPage
} from "../pages";
import {Header, Error} from "../components";
import {AppRoutes} from "./appRoutes";

export const router = createBrowserRouter([
    {
        element: <Header/>,
        children: [
            {
                path: AppRoutes.HOME,
                element: <MoviesPage/>,
            },
            {
                path: AppRoutes.MOVIE_ID,
                element: <MovieIdPage/>,
            },
            {
                path: AppRoutes.SOON,
                element: <SoonPage/>,
            },
            {
                path: AppRoutes.TV,
                element: <TvPage/>,
            },
            {
                path: AppRoutes.ANIMATION,
                element: <AnimationPage/>,
            },
        ]
    },
    {
        path: "*",
        element: <Error />,
    },
]);