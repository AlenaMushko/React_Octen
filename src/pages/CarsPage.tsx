import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {ICar} from "../interfaces";
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
