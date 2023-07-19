import {useEffect} from "react";
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import styles from '../../UsersForm/UsersForm.module.css';
import myStyles from './CarForm.module.css';
import {CarsValidators} from "../../../validators";
import {Label} from "../../Label/Label";
import {Btn} from "../../Btn/Btn";
import {postCar, putCar} from "../../../services/carsApiServices";

export const CarForm = ({setIsLoading, setUpdateCar, setIsSave, updateCar}) => {

    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
    } = useForm({
        mode: 'all',
        resolver: joiResolver(CarsValidators),
        defaultValues: {
            brand: '',
            price: '',
            year: ''
        }
    });


    const carsFormSubmit = (data) => {
        updateCar
            ? handleUpdate(data, updateCar.id)
            : handleCreate(data);
        setIsSave(prev => !prev);
    };

    const handleCreate = async (data) => {
        setIsLoading(true);

        try {
            const car = await postCar(data);
            console.log(car)
            setIsSave(prev => !prev)
            Notify.success(' Added car');
            reset();
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year', updateCar.year, {shouldValidate: true})
        }
    }, [updateCar, setValue()])

    const handleUpdate = async (data, idCar) => {
        setIsLoading(true);

        try {
            const car = await putCar(data, idCar);
            console.log(car)
            setIsSave(prev => !prev)
            Notify.success(' Updated car');
            reset();
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
            setUpdateCar(null);
        }
    };

    return (
        <div className={styles.form_box}>
            <form id='cars-form' className={styles.form} onSubmit={handleSubmit(carsFormSubmit)}>

                <Label value="Brand:" type="text" nameLabel="brand" errors={errors} register={register}
                       valueInput={''}
                />
                <Label value="Price:" type="number" nameLabel="price" errors={errors} register={register}
                       valueInput={''}
                />
                <Label value="Year:" type="number" nameLabel="year" errors={errors} register={register}
                       valueInput={''}
                />

                <div className={myStyles.btn_box}>
                    <Btn
                        valid={!isValid}
                        value={updateCar ? 'Update car' : 'Add car'}
                    />
                </div>
            </form>
        </div>
    );
};




