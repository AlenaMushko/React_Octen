import React from 'react';
import {Outlet} from "react-router-dom";
import {CarForm, CarList} from "../components";

const CarsPage = () => {

    return (
        <div>
            <Outlet/>
            <CarForm/>
           <CarList/>
        </div>
    );
};

export default CarsPage;
