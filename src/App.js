import {useEffect, useState} from "react";

import {UsersList} from "./components";
import styles from "./App.module.css";

function App() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(users)
    return (<section className={styles.section}>
        <UsersList users={users}/>
    </section>);
}

export default App;



