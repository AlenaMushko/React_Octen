import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../hooks/routerHooks";
import {useParams} from "react-router-dom";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {CarInfo} from "../components";

const CarPage = () => {
    const {state} =useAppLocation<ICar>();
    const {id} = useParams<{ id: string }>();
    console.log(state)
    console.log(+id)
    const [car, setCar] = useState<ICar>(null)

    // if(id){
    //     carService.getById(+id)
    //         .then(data=>{
    //             console.log(data)
    //         })
    // }


    return (
        <div>
            {car&&<CarInfo car={car}/>}
        </div>
    );
};

export default CarPage;
