import React from 'react';

import styles from "./App.module.css";
import {CarList} from "./components";

const  App: React.FC=()=>{

    return (<div className={styles.section}>
        <CarList/>
    </div>);
}

export default App;




