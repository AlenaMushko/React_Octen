import React, {useEffect} from 'react';
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slices/carsSlice";

export const CarList = () => {
const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[]);

    console.log(cars)
    return (
        <div>

        </div>
    );
};

