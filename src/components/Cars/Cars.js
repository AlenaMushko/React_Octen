import React, {useEffect, useState} from 'react';
import {Notify} from 'notiflix/build/notiflix-notify-aio';

import styles from '../UsersForm/UsersForm.module.css';
import myStyles from './Cars.module.css';

export const Cars = ({cars, updateCar, setIsCarUpdate, setIsLoading}) => {

    const [newCars, setNewCars] = useState(cars);

    useEffect(() => {
        setNewCars(cars)
    }, [cars]);

    const handleDelete = (idCar) => {
        setIsLoading(true);
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${idCar}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Deleted request failed');
                }
                if (res.status === 204) {
                    return null;
                } else {
                    return res.json();
                }
            })
            .then(data => {
                Notify.success('Deleted car');
                console.log('Delete', data);
                setNewCars(prevCars => prevCars.filter(car => car.id !== idCar));
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
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

