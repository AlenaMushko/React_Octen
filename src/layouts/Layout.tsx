import React, { createContext } from "react";
import {Outlet, useLocation} from "react-router-dom";

import {Header} from "../components";
import {useAppSelector} from "../hooks/reduxHooks";

export  const PathnameContext = createContext(null);

export const Layout = () => {

    const location = useLocation();

    const {isLoading} = useAppSelector((state) => state.cars); //todo
    console.log('isLoading===>', isLoading);
    return (
        <PathnameContext.Provider value={location}>
        <>
            <Header/>
            <Outlet/>
            {/* {isLoading ? <LinearProgress /> : <Outlet />} */}
        </>
        </PathnameContext.Provider>
    );
};
