import {UsersForm, CommentsForm, CarForm} from "./components";

import styles from "./App.module.css";

function App() {

    return (<section className={styles.section}>
        <UsersForm/>
        <CommentsForm/>
        <CarForm/>
    </section>);
}

export default App;




