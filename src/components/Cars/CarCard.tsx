import React from 'react';
import {useDispatch} from "react-redux";

import styles from "./Cars.module.css";
import {Car, carsActions, removeByIdCar} from '../../redux'
import {AppDispatch} from "../../redux/store";

interface IProps {
    item: Car,
}

export const CarCard: React.FC<IProps> = ({item}) => {
    const {id, brand, price, year} = item;
    const dispatch: AppDispatch = useDispatch();

    const removeCar = (carId: number) => dispatch(removeByIdCar(carId))

    const handleCarItemClick = (car: Car) => {
        dispatch(carsActions.selectCar(car));
        dispatch(carsActions.setIsCarUpdate(true))
    };

    const handleRemove = (idCar: number) => {
        removeCar(idCar);
    };

    return (
        <li key={id} className={styles.car_item}>
            <h2>Brand:{brand}</h2>
            <p><b>Price: </b>{price}</p>
            <p><b>Year: </b>{year}</p>
            <div className={styles.btn_box}>
                <button className={styles.btn} onClick={() => handleCarItemClick(item)}>Update Car</button>
                <button className={styles.btn} onClick={() => {
                    if (id) {
                        handleRemove(id)
                    }
                }}>Remove Car
                </button>
            </div>
        </li>
    );
};

