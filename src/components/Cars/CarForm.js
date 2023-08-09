import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import styles from './Cars.module.css';
import {Label} from "../Label/Label";
import {CarsValidators} from "../../validators/CarsValidators";
import {addCar, getByIdCar} from "../../redux";


export const CarForm = ({idCar, setIdCar}) => {
    const dispatch = useDispatch();
    const isCarUpdate = useSelector(store => store.carReduser.isCarUpdate)
    const addCreateCar = (data) => dispatch(addCar(data));
    const getUpdateCar = (id) => dispatch(getByIdCar(id));

    const updatedCar = useSelector(store => store.carReduser.updateCar);

    const [newCar, setNewCar] = useState(null);

    useEffect(() => {
        if (idCar) {
            getUpdateCar(idCar);
            setIdCar(null);
        }
    }, [idCar]);

    useEffect(() => {
        if (updatedCar ) {
            setNewCar(updatedCar);
        }
    }, [updatedCar]);

    console.log(newCar)

    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        mode: 'all',
        resolver: joiResolver(CarsValidators),
    });

    const carsFormSubmit = (data) => {
        if (!isCarUpdate) {
            data.id = uuidv4();
            console.log(data)
            addCreateCar(data)
        } else {
            // addCreateCar(newCar.id, {...newCar, ...data})
        }
        reset();
        // setNewCar(null);
        // dispatch(carsActions.setIsCarUpdate(false));
    };

    return (
        <div className={styles.form_box}>
            <form id='cars-form' className={styles.form} onSubmit={handleSubmit(carsFormSubmit)}>

                <Label value="Brand:" type="text" nameLabel="brand" errors={errors} register={register}
                       valueInput={newCar?.brand || ''}
                       onChange={(e) => setNewCar({...newCar, brand: e.target.value})}
                />
                <Label value="Price:" type="number" nameLabel="price" errors={errors} register={register}
                       valueInput={newCar?.price || ''}
                       onChange={(e) => setNewCar({...newCar, price: e.target.value})}
                />
                <Label value="Year:" type="number" nameLabel="year" errors={errors} register={register}
                       valueInput={newCar?.year || ''}
                       onChange={(e) => setNewCar({...newCar, year: e.target.value})}
                />

                <div className={styles.btn_box}>
                    <button type='submit'
                            disabled={!isValid}
                            className={styles.btn}
                    >{isCarUpdate ? 'Update car' : 'Add car'}</button>
                </div>
            </form>
        </div>
    );
};

