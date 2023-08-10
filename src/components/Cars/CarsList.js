import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Loader} from '../Loader';
import {CarCard} from "./CarCard";
import {CarForm} from "./CarForm";
import styles from './Cars.module.css';
import {carsActions, getAllCars} from "../../redux";

export const CarsList = () => {
    const dispatch = useDispatch();
    const fetchAllCars = () => dispatch(getAllCars())

    const cars = useSelector(store => store.carReduser.cars);
    const isLoading = useSelector(store => store.carReduser.isLoading);
    const [idCar, setIdCar] = useState(null);

    useEffect(() => {
        fetchAllCars();
    }, [idCar]);

    const handleUpdate = (idCar) => {
        setIdCar(idCar);
        dispatch(carsActions.setIsCarUpdate(true));
    }

    return (
        <>
            {isLoading
                ? <Loader/>
                : <>
                    <CarForm idCar={idCar} setIdCar={setIdCar}/>
                    <ul className={styles.car_list}>
                        {cars.map(car => (
                            <CarCard key={car.id} item={car} update={handleUpdate}/>
                        ))}
                    </ul>
                </>}
        </>
    );
};

