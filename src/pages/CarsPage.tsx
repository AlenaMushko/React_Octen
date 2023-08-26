import React, {useContext} from "react";
import {Outlet} from "react-router-dom";

import {CarForm, CarList, CarPagination} from "../components";
import {PathnameContext} from "../layouts/Layout";

const CarsPage = () => {
    const location =useContext(PathnameContext);

    return (
        <div>
            <Outlet/>
            <CarForm/>
            <CarList/>
            <CarPagination location={location}/>
        </div>
    );
};

export default CarsPage;
