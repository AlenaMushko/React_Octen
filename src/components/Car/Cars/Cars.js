import React, {useEffect, useState} from 'react';
import {Notify} from 'notiflix/build/notiflix-notify-aio';

import styles from '../../UsersForm/UsersForm.module.css';
import myStyles from './Cars.module.css';
import {removeCar} from "../../../services/carsApiServices";

export const Cars = ({cars, updateCar, setIsCarUpdate, setIsLoading}) => {

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
            setNewCars(prevCars => prevCars.filter(car => car.id !== idCar));
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
                {newCars.map(car => (
                    <li key={car.id} className={myStyles.car_item}>
                        <p><b>Brand:</b>{car.brand}</p>
                        <p><b>Price:</b>{car.price}</p>
                        <p><b>Year:</b>{car.year}</p>
                        <div className={myStyles.car_btb}>
                            <button className={styles.btn}
                                    onClick={() => {
                                        setIsCarUpdate(true);
                                        updateCar(car)
                                    }}>Update
                            </button>
                            <button className={styles.btn}
                                    onClick={() => handleDelete(car.id)}
                            >Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

