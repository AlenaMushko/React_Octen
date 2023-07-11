import {UserComponent} from "../UserComponent/UserComponent";
import styles from './UsersComponent.module.css';
import {useEffect, useState} from "react";

export const UsersComponent = ({showPosts}) => {
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

    return (
        <ul className={styles.user_list}>
            {users.map(user => (
                <UserComponent key={user.id} user={user} showPosts={showPosts}/>
            ))}
        </ul>
    )
}