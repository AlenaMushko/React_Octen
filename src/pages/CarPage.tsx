import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../hooks/routerHooks";
import {useParams} from "react-router-dom";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {CarInfo} from "../components";
import { Button, Container, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const CarPage = () => {
    const {state} =useAppLocation<ICar>();
    const {id} = useParams<{ id: string }>();
    const [car, setCar] = useState<ICar>(null)

    useEffect(() => {
        if (state) {
          setCar(state);
        } else {
          carService.getById(+id)
            .then(({ data }) => {
              if (data) {
                setCar(data);
              } else {
                console.error(`Car with ID: ${id} does not exist.`);
              }
            })
            .catch(error => {
              console.error( error);
            });
        }
      }, [state, id]);
      

    return (
        <Container sx={{marginTop: '5vh'}}>
       <Button variant="contained" href="/cars">
 Go to all cars
</Button>
            {car&&<CarInfo car={car}/>}
    </Container>
    );
};

export default CarPage;
