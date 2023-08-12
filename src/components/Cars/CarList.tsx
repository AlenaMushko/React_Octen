import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Loader} from '../Loader';
import {CarCard} from "./CarCard";
import {CarForm} from "./CarForm";
import styles from './Cars.module.css';
import {Car,  getAllCars} from "../../redux";
import {AppDispatch, AppStateType} from "../../redux/store";

// type IdCarState = {
//     carId: number | null;
//     // setCarId: (value: boolean | ((prevVar: boolean) => boolean)) => void;
// };

export const CarList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch<AppDispatch>();
    const fetchAllCars = () => dispatch(getAllCars())

    const cars: Car[] | [] = useSelector((store: AppStateType) => store.carReduser.cars);
    const isLoading = useSelector((store: AppStateType) => store.carReduser.isLoading);

    useEffect(() => {
        fetchAllCars();
    }, []);

    return (
        <>
            {isLoading
                ? <Loader/>
                : <>
                    <CarForm/>
                    <ul className={styles.car_list}>
                        {cars?.map(car => (
                            <CarCard key={car.id} item={car}/>
                        ))}
                    </ul>
                </>}
        </>
    );
};

