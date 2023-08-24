import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import {ICar} from "../../interfaces";

interface IProps {
    car: ICar
}

export const CarInfo:React.FC<IProps> = ({car}) => {
    console.log(car)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={car.photo || ''}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {car.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {car.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {car.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
