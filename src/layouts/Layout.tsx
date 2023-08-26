import {LinearProgress} from "@mui/material";
import React, {createContext} from "react";
import {Outlet, useLocation} from "react-router-dom";

import {Header} from "../components";
import {useAppSelector} from "../hooks/reduxHooks";

export const PathnameContext = createContext(null);

export const Layout = () => {

    const location = useLocation();

    const {isLoading} = useAppSelector((state) => state.cars);
    const {cars} = useAppSelector(state => state.cars)

    return (
        <PathnameContext.Provider value={location}>
            <>
                <Header/>
                {cars.length === 0 && isLoading ? <LinearProgress/> : <Outlet/>}
            </>
        </PathnameContext.Provider>
    );
};
