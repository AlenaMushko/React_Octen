import {Cars} from "./Cars/Cars";
import {CarForm} from "./CarForm/CarForm";
import {useState} from "react";

export const CarContainer = ({setIsLoading}) => {
    const [isSave, setIsSave] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);

    return (
        <>
            <CarForm setIsLoading={setIsLoading}
                     updateCar={updateCar}
                     setIsSave={setIsSave}
                     setUpdateCar={setUpdateCar}
            />

            <Cars
                setIsLoading={setIsLoading}
                setUpdateCar={setUpdateCar}
                setIsSave={setIsSave}
                isSave={isSave}
            />
        </>
    );
};

