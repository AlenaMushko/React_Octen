import {SubChild2_1} from "./SubChild2_1";
import {SubChild2_2} from "./SubChild2_2";

export const Child2 = ({handleSendData}) => {
    return (
        <>
            <SubChild2_1/>
            <SubChild2_2 handleSendData={handleSendData}/>
        </>
    )
}