import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../redux/actions/carsActions";

export const Cars = () => {
    const cars = useSelector(store => store.carReduser.cars);
    const isLoading = useSelector(store => store.carReduser.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carsActions.setIsLoadyng(true));
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {method: 'GET'})
            .then(res => res.json())
            .then(data => dispatch(carsActions.setCars(data)))
    }, [dispatch]);

    return (
        <>
            {isLoading
                ? <h1>Loading...</h1>
                : <ul>
                    {cars.map(({brand,id, price, year})=>(
                    <li key={id}>
                        <h2>Brand:{brand} / id: {id}</h2>
                        <p><b>Price: </b>{price}</p>
                        <p><b>Year: </b>{year}</p>
                    </li>
                    ))}
                </ul>}
        </>
    );
};

