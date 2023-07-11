import {useContext} from "react";
import {DataContext} from "../../App";

export const SubChild11 = () => {
    const dataContext = useContext(DataContext);

    return (
        <p style={{width: '350px'}}>{dataContext.sendData}</p>
    )
}