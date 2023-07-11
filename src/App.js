import {createContext, useState} from "react";

import {Child1, Child2} from "./components";
import styles from "./App.module.css";

export const DataContext = createContext(null);

function App() {

    const [sendData, setSendData] = useState();

    const handleSendData = (data) => {
        setSendData(data);
    }

    return (<div className={styles.section}>
        <DataContext.Provider value={{sendData, handleSendData}}>
            <Child1/>
            <Child2/>
        </DataContext.Provider>
    </div>);
}

export default App;



