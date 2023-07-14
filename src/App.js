import {UsersForm, CommentsForm, CarForm} from "./components";

import styles from "./App.module.css";
import React, {useState} from "react";
import {Loader} from "./helpers";

function App() {
    const [isLoading, setIsLoading]=useState(false);

    return (<section className={styles.section}>
        {isLoading && <Loader/>}
        <UsersForm setIsLoading={setIsLoading}/>
        <CommentsForm setIsLoading={setIsLoading}/>
        <CarForm setIsLoading={setIsLoading}/>
    </section>);
}

export default App;




