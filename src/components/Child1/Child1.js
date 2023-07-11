import {SubChild1_1} from "./SubChild1_1";
import {SubChild1_2} from "./SubChild1_2";

export const Child1 = ({sendData}) => {

    return (
        <>
            <SubChild1_1 sendData={sendData}/>
            <SubChild1_2/>
        </>
    )
}