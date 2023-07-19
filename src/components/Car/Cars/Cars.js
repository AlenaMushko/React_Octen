import React, {useEffect, useState} from 'react';
import {Notify} from 'notiflix/build/notiflix-notify-aio';

import myStyles from './Cars.module.css';
import {getCar, removeCar} from "../../../services/carsApiServices";
import CarCard from "./CarCard";

export const Cars = ({setUpdateCar,  setIsLoading, setIsSave, isSave}) => {
    const [cars, setCars] = useState([]);

    const fetchCar = async () => {
        setIsLoading(true);

        try {
            const newCars = await getCar();
            return newCars;
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCar()
            .then(data => {
                setCars(data);
            });
    }, []);

    useEffect(() => {
        fetchCar()
            .then(data => {
                setCars(data);
            });
    }, [isSave]);

    const handleDelete = async (idCar) => {
        setIsLoading(true);

        try {
            const car = await removeCar(idCar);
            Notify.success('Deleted car');
            console.log('Delete', car);
            setIsSave(prev => !prev);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ul className={myStyles.car_list}>
                {cars?.map((car) => (
                    <CarCard
                        key={car.id}
                        car={car}
                        setUpdateCar={setUpdateCar}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    );
};

