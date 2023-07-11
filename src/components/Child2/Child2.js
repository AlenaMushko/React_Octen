import {SubChild21} from "./SubChild2&1";
import {SubChild22} from "./SubChild2&2";

export const Child2 = ({handleSendData}) => {
    return (
        <>
            <SubChild21/>
            <SubChild22 handleSendData={handleSendData}/>
        </>
    )
}