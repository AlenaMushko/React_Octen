import React from 'react';

import styles from "./App.module.css";
import {CarsList} from "./components";

const  App: React.FC=()=>{

    return (<div className={styles.section}>
        <CarsList/>
    </div>);
}

export default App;




