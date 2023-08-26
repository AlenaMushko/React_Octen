import React from "react";
import {createBrowserRouter, Navigate,} from "react-router-dom";

import {AppRoutes} from "./appRoutes";
import {Layout} from '../layouts';
import {Error} from '../components';
import {RegisterPage, LoginPage, CarPage, CarsPage} from '../pages';

export const router = createBrowserRouter([
    {
        path: AppRoutes.HOME,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Navigate to={AppRoutes.CARS}/>
            },
            {
                path: AppRoutes.CARS,
                element: <CarsPage/>,
            },
            {
                path: AppRoutes.CAR_ID,
                element: <CarPage/>
            },
            {
                path: AppRoutes.REGISTER,
                element: <RegisterPage/>,
            },
            {
                path: AppRoutes.LOGIN,
                element: <LoginPage/>,
            },
            {
                path: "*",
                element: <Error/>,
            },
        ]
    }
]);
