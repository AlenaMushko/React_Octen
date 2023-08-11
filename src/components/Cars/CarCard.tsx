import React from 'react';
import {useDispatch} from "react-redux";

import styles from "./Cars.module.css";
import {Cars, removeByIdCar} from '../../redux'
import {AppDispatch} from "../../redux/store";

interface IProps{
    item:Cars,
    update: (id: number) => void
}

export const CarCard:React.FC<IProps>= ({item, update}) => {
    const {id, brand, price, year} = item;
    const dispatch:AppDispatch = useDispatch();

    const removeCar = (carId:number ) => dispatch(removeByIdCar(carId))

    const handleRemove = (idCar:number) => {
        removeCar(idCar);
    }

    return (
        <li key={id} className={styles.car_item}>
            <h2>Brand:{brand}</h2>
            <p><b>Price: </b>{price}</p>
            <p><b>Year: </b>{year}</p>
            <div className={styles.btn_box}>
                <button className={styles.btn} onClick={() => update(id)}>Update Car</button>
                <button className={styles.btn} onClick={() => handleRemove(id)}>Remove Car</button>
            </div>
        </li>
    );
};

