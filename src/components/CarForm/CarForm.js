import {useEffect, useState} from "react";
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {Cars} from "../Cars/Cars";
import styles from '../UsersForm/UsersForm.module.css';
import myStyles from './CarForm.module.css';
import {CarsValidators} from "../../validators";
import {Label} from "../Label/Label";
import {Btn} from "../Btn/Btn";

export const CarForm = ({setIsLoading}) => {

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);
    const [isCarUpdate, setIsCarUpdate] = useState(false)


    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        mode: 'all',
        resolver: joiResolver(CarsValidators),
    });

    const fetchCar = () => {
        setIsLoading(true);
        return fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchCar()
            .then(data => {
                setCars(data);
            });
    }, [fetchCar]);

    const carsFormSubmit = (data) => {
        isCarUpdate
            ? handleUpdate(data, updateCar.id)
            : handleCreate(data)
    };

    const handleCreate = (data) => {
        setIsLoading(true);
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(value => {
                if (!value.ok) {
                    throw  Error(value.status)
                }
                return value.json()
            })
            .then(data => {
                console.log(data)
                reset();
                Notify.success(' Added car');
                setCars(prevCars => [...prevCars, data]);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    };
    const handleGetId = (data) => {
        setUpdateCar(data);
        setIsCarUpdate(true);
        reset();
    }

    const handleUpdate = (data, idCar) => {
        setIsLoading(true);
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${idCar}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(value => {
                if (!value.ok) {
                    throw  Error(value.status)
                }
                return value.json()
            })
            .then(data => {
                reset();
                console.log(data)
                Notify.success(' Updated car');
                setCars(prevCars => prevCars.map(car => (car.id === updateCar.id ? updateCar : car)));
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
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




