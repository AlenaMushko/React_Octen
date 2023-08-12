import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import styles from './Cars.module.css';
import {Label} from "../Label/Label";
import {CarsValidators} from "../../validators/CarsValidators";
import {addCar, Car, carsActions, updateCar,} from "../../redux";
import {AppDispatch, AppStateType} from "../../redux/store";

interface CarDetailsI {
    brand: string;
    price: number | null;
    year: number | null;
}

export const CarForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors, isValid},
    } = useForm<Car>({
        mode: 'all',
        resolver: joiResolver(CarsValidators),
    });


    const dispatch: AppDispatch = useDispatch();
    const isCarUpdate = useSelector((store: AppStateType) => store.carReduser.isCarUpdate)
    const addCreateCar = (data: {}) => dispatch(addCar(data));
    const addUpdateCar = (id: number, data: {}) => dispatch(updateCar(id, data));

    const selectedCar: Car | null = useSelector((store: AppStateType) => store.carReduser.selectedCar);

    const [carDetails, setCarDetails] = useState<CarDetailsI>({
        brand: '',
        price: null,
        year: null
    });

    useEffect(() => {
        if (selectedCar && isCarUpdate) {
            setValue('brand', selectedCar.brand)
            setValue('price', selectedCar.price)
            setValue('year', selectedCar.year)

            setCarDetails({
                brand: selectedCar.brand,
                price: selectedCar.price,
                year: selectedCar.year
            });
        }
    }, [selectedCar]);

    const handleInputChange = (name: keyof Car, value: string | number) => {
        setCarDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const carsFormSubmit: SubmitHandler<Car> = (data) => {
        const finalData = {
            ...selectedCar,
            ...data,
            id: selectedCar?.id || uuidv4()
        };
        if (!isCarUpdate) {
            addCreateCar(finalData);
        } else {
            addUpdateCar(finalData.id as number, finalData);
            dispatch(carsActions.setIsCarUpdate(false));
            dispatch(carsActions.resetUpdatedCar());
        }
    };

    return (
        <div className={styles.form_box}>
            <form id='cars-form' className={styles.form} onSubmit={handleSubmit(carsFormSubmit)}>

                <Label value="Brand:" type="text" nameLabel="brand" errors={errors} register={register}
                       valueInput={carDetails ? carDetails.brand : ''}
                       onChange={(e) => handleInputChange('brand', e.target.value)}
                />
                <Label value="Price:" type="number" nameLabel="price" errors={errors} register={register}
                       valueInput={carDetails ? carDetails.price : null}
                       onChange={(e) => handleInputChange('price', e.target.value)}
                />
                <Label value="Year:" type="number" nameLabel="year" errors={errors} register={register}
                       valueInput={carDetails ? carDetails.year : null}
                       onChange={(e) => handleInputChange('year', e.target.value)}
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

