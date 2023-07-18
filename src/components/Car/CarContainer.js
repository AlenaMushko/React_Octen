import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {useState} from "react";

export const CarContainer = ({setIsLoading}) => {
    const [isSave, setIsSave] = useState(null);

    return (
       <>
       <CarForm   setIsLoading={setIsLoading} />
       <Cars  />
       </>
    );
};

