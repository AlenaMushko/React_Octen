import {useState} from "react";

import {Child1, Child2} from "./components";
import styles from "./App.module.css";

function App() {

    const [sendData, setSendData] = useState();

    const handleSendData = (data) => {
        setSendData(data);
    }

    return (<div className={styles.section}>
        <Child1 sendData={sendData}/>
        <Child2 handleSendData={handleSendData}/>
    </div>);
}

export default App;



