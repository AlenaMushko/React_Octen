import {useEffect, useState} from "react";
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {Cars} from "../Cars/Cars";
import styles from '../../UsersForm/UsersForm.module.css';
import myStyles from './CarForm.module.css';
import {CarsValidators} from "../../../validators";
import {Label} from "../../Label/Label";
import {Btn} from "../../Btn/Btn";
import {getCar, postCar, putCar} from "../../../services/carsApiServices";

export const CarForm = ({setIsLoading}) => {

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);
    const [isCarUpdate, setIsCarUpdate] = useState(false)


    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: {errors,
            isValid},
    } = useForm({
        mode: 'all',
        resolver: joiResolver(CarsValidators),
        defaultValues:{
            brand: '',
            price:'',
            year:''
        }
    });

    const fetchCar = async () => {
        setIsLoading(true);

        try {
            const cars = await getCar();
            reset();
            return cars;
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCar()
            .then(data => {
                setCars(data);
            });
    }, []);

    const carsFormSubmit = (data) => {
        isCarUpdate
            ? handleUpdate(data, updateCar.id)
            : handleCreate(data);

        setValue('brand', '');
        setValue('price', '');
        setValue('year', '')
    };

    const handleCreate = async (data) => {
        setIsLoading(true);

        try {
            const car = await postCar(data);
            console.log(car)
            // reset();
            Notify.success(' Added car');
            setCars(prevCars => [...prevCars, data]);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    const handleGetId = (data) => {
        setUpdateCar(data);
        setIsCarUpdate(true);
        // reset();
    };

    useEffect(() => {
        reset({
            brand: '',
            price:'',
            year:''
        })
    }, [reset])

    const handleUpdate = async (data, idCar) => {
        setIsLoading(true);

        try {
            const car = await putCar(data, idCar);
            console.log(car)
            Notify.success(' Updated car');
            setCars(prevCars => prevCars.map(car => (car.id === updateCar.id ? updateCar : car)));
            // reset({ ...data })
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={styles.form_box}>
                <form id='cars-form' className={styles.form} onSubmit={handleSubmit(carsFormSubmit)}>

                    <Label value="Brand:" type="text" nameLabel="brand" errors={errors} register={register}
                           valueInput={updateCar?.brand || ''}
                           onChange={(e) => setUpdateCar({...updateCar, brand: e.target.value})}
                    />
                    <Label value="Price:" type="number" nameLabel="price" errors={errors} register={register}
                           valueInput={updateCar?.price || ''}
                           onChange={(e) => setUpdateCar({...updateCar, price: e.target.value})}
                    />
                    <Label value="Year:" type="number" nameLabel="year" errors={errors} register={register}
                           valueInput={updateCar?.year || ''}
                           onChange={(e) => setUpdateCar({...updateCar, year: e.target.value})}
                    />

                    <div className={myStyles.btn_box}>
                        <Btn
                            valid={!isValid}
                            value={isCarUpdate ? 'Update car' : 'Add car'}
                        />
                    </div>
                </form>
            </div>

            <div>
                {cars && <Cars cars={cars}
                               fetchCar={fetchCar}
                               updateCar={handleGetId}
                               setIsCarUpdate={setIsCarUpdate}
                               setIsLoading={setIsLoading}
                />}
            </div>
        </>
    );
};




