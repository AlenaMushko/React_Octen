import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slices/carsSlice";
import {CarItem} from "./CarItem";

export const CarList: React.FC = () => {
    const dispatch = useAppDispatch();
    const cars = useAppSelector(state => state.cars.cars);

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);

    return (
        <Grid container spacing={2} sx={{width: '100%', bgcolor: 'background.paper', marginTop: '24px'}}>
            {cars?.map(car => (
                <Grid item xs={4} key={car.id}>
                    <CarItem item={car}/>
                </Grid>
            ))}
        </Grid>
    );
}
