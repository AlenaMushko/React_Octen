import axios from 'axios';
import {CARS_BASEURL} from "../api/endpoints";

const carsAxios = axios.create({
    baseURL: CARS_BASEURL,
});

export const getCar = async () => {
    try {
        const {data} = await carsAxios.get('');
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

export const postCar = async (car) => {

    try {
        const {data} = await carsAxios.post('',
            car, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

export const putCar = async (car,id) => {
    try {
        const {data} = await carsAxios.put(`/${id}`,
            car, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

export const removeCar = async (id) => {
    try {
        const {data} = await carsAxios.delete(`/${id}`);
        return data;
    } catch (err) {
        console.log(err.message);
    }
}


