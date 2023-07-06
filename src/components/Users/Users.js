import {useEffect, useState} from "react";

import {UserCard} from "../UserCard/UserCard";
import styles from './Users.module.css';

export const Users = ({handleClick}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <ul className={styles.usersWrap}>
            {users?.map(user => (
                <UserCard key={user.id} user={user} handleClick={handleClick}/>
            ))}
        </ul>
    )
}