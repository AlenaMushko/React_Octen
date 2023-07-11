import {SubChild11} from "./SubChild1&1";
import {SubChild12} from "./SubChild1&2";

export const Child1 = ({sendData}) => {

    return (
        <>
            <SubChild11 sendData={sendData}/>
            <SubChild12/>
        </>
    )
}