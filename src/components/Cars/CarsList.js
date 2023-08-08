import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Loader} from '../Loader';
import {carsActions} from "../../redux/actions/carsActions";
import {CarCard} from "./CarCard";
import {CarForm} from "./CarForm";
import styles from './Cars.module.css';

export const CarsList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(store => store.carReduser.cars);
    const isLoading = useSelector(store => store.carReduser.isLoading);

    const [idCar, setIdCar] = useState(null);

    useEffect(() => {
        dispatch(carsActions.setIsLoading(true));
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {method: 'GET'})
            .then(res => res.json())
            .then(data => dispatch(carsActions.getCars(data)))
            .catch(err => console.log(err))
            .finally(dispatch(carsActions.setIsLoading(false)))
    }, [dispatch]);

    const handleUpdate = (idCar) => {
        setIdCar(idCar);
        dispatch(carsActions.setIsCarUpdate(true));
    }

    return (
        <>
            {isLoading
                ? <Loader/>
                : <>
                    <CarForm idCar={idCar}/>
                    <ul className={styles.car_list}>
                        {cars.map(car => (
                            <CarCard key={car.id} item={car} update={handleUpdate}/>
                        ))}
                    </ul>
                </>}
        </>
    );
};

