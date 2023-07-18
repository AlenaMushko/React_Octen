import React, {useEffect, useState} from 'react';
import {Notify} from 'notiflix/build/notiflix-notify-aio';

import myStyles from './Cars.module.css';
import {removeCar} from "../../../services/carsApiServices";
import CarCard from "../../../api/CarCard";

export const Cars = ({cars, updateCar, setIsCarUpdate, setIsLoading, setIsSave}) => {
    const [newCars, setNewCars] = useState(cars);

    useEffect(() => {
        setNewCars(cars)
    }, [cars]);

    const handleDelete = async (idCar) => {
        setIsLoading(true);

        try {
            const car = await removeCar(idCar);
            Notify.success('Deleted car');
            console.log('Delete', car);
            setIsSave(prev => !prev);
            setNewCars(prevCars => prevCars.filter(car => car.id !== idCar));
            setIsSave(prev => !prev);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }

        setIsLoading(false);
    };

    return (
        <>
            <ul className={myStyles.car_list}>
                {newCars?.map((car) => (
                    <CarCard
                             key={car.id}
                             car={car}
                             setIsCarUpdate={setIsCarUpdate}
                             updateCar={updateCar}
                             handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    );
};

