import {UsersForm, CommentsForm, CarContainer} from "./components";

import styles from "./App.module.css";
import React, {useState} from "react";
import {Loader} from "./helpers";

function App() {
    const [isLoading, setIsLoading]=useState(false);

    return (<section className={styles.section}>
        {isLoading && <Loader/>}
        <UsersForm setIsLoading={setIsLoading}/>
        <CommentsForm setIsLoading={setIsLoading}/>
        <CarContainer setIsLoading={setIsLoading}/>
    </section>);
}

export default App;




