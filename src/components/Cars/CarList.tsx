import React from 'react';
import Grid from '@mui/material/Grid';

import { useAppSelector} from "../../hooks/reduxHooks";
import {CarItem} from "./CarItem";

export const CarList: React.FC = () => {
    const cars = useAppSelector(state => state.cars.cars);

    return (
        <Grid container spacing={2} sx={{width: '100%', bgcolor: 'background.paper', marginTop: '24px'}}>
            {cars?.map(car => (
                <Grid item xs={6} key={car.id}>
                    <CarItem item={car}/>
                </Grid>
            ))}
        </Grid>
    );
}
