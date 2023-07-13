import {useEffect, useRef, useState} from "react";
import {Notify} from 'notiflix/build/notiflix-notify-aio';

import {Cars} from "../Cars/Cars";
import styles from '../UsersForm/UsersForm.module.css';
import myStyles from './CarForm.module.css';

export const CarForm = () => {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    const brandRef = useRef(null);
    const priceRef = useRef(null);
    const yearRef = useRef(null);

    let brandValue = null;
    let priceValue = null
    let yearValue = null;

    const fetchCar = () => {
        return fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchCar()
            .then(data => {
                setCars(data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        brandValue = brandRef.current.value;
        priceValue = parseInt(priceRef.current.value);
        yearValue = parseInt(yearRef.current.value);

        if (!brandValue || !priceValue || !yearValue) {
            Notify.failure('Please fill in all fields correctly');
            return;
        }
        document.getElementById("cars-form").reset();
    };

    const handleCreate = () => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                brand: brandRef.current.value,
                price: priceRef.current.value,
                year: yearRef.current.value,
            })
        })
            .then(res => res.json())
            .then(data => {
                Notify.info('Created car');
                fetchCar()
                    .then(data => {
                        setCars(data);
                    });
                console.log('create', data)
            });
    };

    const handleGetId = (data) => {
        setUpdateCar(data);
    }

    const handleUpdate = (idCar) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${idCar}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: idCar,
                brand: brandRef.current.value,
                price: priceRef.current.value,
                year: yearRef.current.value,
            })
        })
            .then(res => res.json())
            .then(data => {
                Notify.info('Car information is updated');
                fetchCar()
                    .then(data => {
                        setCars(data);
                    });
                console.log('Update', data)
            });
    };

    return (
        <>
            <div className={styles.form_box}>
                <form id='cars-form' className={styles.form} onSubmit={handleSubmit}>
                    <label>Brand:
                        <input type='text'
                               ref={brandRef}
                               className={styles.form_input}
                               value={updateCar?.brand || ''}
                               onChange={(e) => setUpdateCar({...updateCar, brand: e.target.value})}
                               pattern='^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$' required/>
                    </label>
                    <label>Price:
                        <input type='number'
                               ref={priceRef}
                               value={updateCar?.price || ''}
                               onChange={(e) => setUpdateCar({...updateCar, price: e.target.value})}
                               className={styles.form_input}
                               min='0' max='1000000'
                               required/>
                    </label>
                    <label>Year:
                        <input type='number'
                               ref={yearRef}
                               className={styles.form_input}
                               value={updateCar?.year || ''}
                               onChange={(e) => setUpdateCar({...updateCar, year: e.target.value})}
                               min='1990' max='2023'
                               required/>
                    </label>

                    <div className={myStyles.btn_box}>
                        <input type='submit' value='Add car' onClick={handleCreate} className={styles.btn}/>
                        <input type='submit' value='Update car'
                               onClick={() => handleUpdate(updateCar.id)}
                               className={styles.btn}/>
                    </div>
                </form>
            </div>

            <div>
                {cars && <Cars cars={cars}
                               fetchCar={fetchCar}
                               updateCar={handleGetId}
                />}
            </div>
        </>
    );
};




