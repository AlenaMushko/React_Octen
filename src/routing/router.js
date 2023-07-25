import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";

import {AnimationPage,
    // MovieIdPage,
    MoviesPage, PopularPage, RevenuePage} from "../pages";
import {AppLayout, Error} from "../components";
import {AppRoutes} from "./appRoutes";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: AppRoutes.HOME,
                element: <MoviesPage/>,
            },
            // {
            //     path: AppRoutes.MOVIE_ID,
            //     element: <MovieIdPage/>,
            // },
            {
                path: AppRoutes.POPULAR,
                element: <PopularPage/>,
            },
            {
                path: AppRoutes.REVENUE,
                element: <RevenuePage/>,
            },
            {
                path: AppRoutes.ANIMATION,
                element: <AnimationPage/>,
            },
            {
                path: "*",
                element: <Error />,
            },
        ]
    }
]);