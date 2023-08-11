import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import styles from './Cars.module.css';
import {Label} from "../Label/Label";
import {CarsValidators} from "../../validators/CarsValidators";
import {addCar, Cars, carsActions, getByIdCar, updateCar,} from "../../redux";
import {AppDispatch, AppStateType} from "../../redux/store";

interface IProps{
    idCar:number | null,
    // setIdCar: (id: number ) => void;
}

export const CarForm:React.FC<IProps> = ({idCar
                                             // , setIdCar
}) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors, isValid},
    } = useForm({
        mode: 'all',
        resolver: joiResolver(CarsValidators),
    });


    const dispatch:AppDispatch = useDispatch();
    const isCarUpdate = useSelector((store:AppStateType) => store.carReduser.isCarUpdate)
    const addCreateCar = (data:{}) => dispatch(addCar(data));
    const getUpdateCar = (id: number) => dispatch(getByIdCar(id));
    const addUpdateCar = (id:number , data:{}) => dispatch(updateCar(id, data));

    const updatedCar:Cars | null  = useSelector((store:AppStateType) => store.carReduser.updateCar);

    const [newCar, setNewCar] = useState<Cars | null >(null);

    useEffect(() => {
        if (idCar) {
            console.log(idCar)
            getUpdateCar(idCar);
            // setIdCar(null);
        }
    }, [idCar]);

    useEffect(() => {
        if (updatedCar) {
            setNewCar(updatedCar);
            setValue('brand', updatedCar.brand)
            setValue('price', updatedCar.price)
            setValue('year', updatedCar.year)
        } else {
            setNewCar(null)
        }
    }, [updatedCar]);

    const carsFormSubmit = (data:{}) => {
        const finalData = {
            ...newCar,
            ...data,
            id: isCarUpdate && newCar ? newCar.id : uuidv4()
        };
        if (!isCarUpdate) {
            addCreateCar(finalData);
        } else {
            addUpdateCar(finalData.id as number, finalData);
            dispatch(carsActions.setIsCarUpdate(false));
            dispatch(carsActions.resetUpdatedCar());
        }
        setNewCar(null);
    };

    return (
        <div className={styles.form_box}>
            <form id='cars-form' className={styles.form} onSubmit={handleSubmit(carsFormSubmit)}>

                <Label value="Brand:" type="text" nameLabel="brand" errors={errors} register={register}
                       valueInput={newCar?.brand || ''}
                       onChange={(e) => setNewCar({...newCar, brand: e.target.value} as Cars)}
                />
                <Label value="Price:" type="number" nameLabel="price" errors={errors} register={register}
                       valueInput={newCar?.price || 0}
                       onChange={(e) => {
                           if (newCar) {
                               setNewCar({...newCar, price: Number(e.target.value)});
                           }
                       }}
                />
                <Label value="Year:" type="number" nameLabel="year" errors={errors} register={register}
                       valueInput={newCar?.year || 0}
                       onChange={(e) => {
                           if (newCar) {
                               setNewCar({...newCar, year: Number(e.target.value)});
                           }
                       }}
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

