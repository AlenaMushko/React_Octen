import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Loader} from '../Loader';
import {CarCard} from "./CarCard";
import {CarForm} from "./CarForm";
import styles from './Cars.module.css';
import {Cars, carsActions, getAllCars} from "../../redux";
import {AppDispatch, AppStateType} from "../../redux/store";

type IdCarState = {
    idCar: number | null;
};

export const CarsList:React.FC = () => {
    const dispatch: AppDispatch = useDispatch<AppDispatch>();
    const fetchAllCars = () => dispatch(getAllCars())

    const cars:Cars[] | [] = useSelector((store:AppStateType) => store.carReduser.cars);
    const isLoading = useSelector((store:AppStateType) => store.carReduser.isLoading);
    const [idCar, setIdCar] = useState<IdCarState>({ idCar: null });

    useEffect(() => {
        fetchAllCars();
    }, [idCar]);

    const handleUpdate = (id:number) => {
        setIdCar({ idCar: id });
        dispatch(carsActions.setIsCarUpdate(true));
    }

    return (
        <>
            {isLoading
                ? <Loader/>
                : <>
                    <CarForm idCar={idCar.idCar}
                             // setIdCar={setIdCar}
                    />
                    <ul className={styles.car_list}>
                        {cars?.map(car => (
                            <CarCard key={car.id} item={car} update={handleUpdate}/>
                        ))}
                    </ul>
                </>}
        </>
    );
};

