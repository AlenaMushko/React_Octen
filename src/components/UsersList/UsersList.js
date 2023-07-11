import {UserCard} from "../UserCard/UserCard";
import styles from './UsersList.module.css';

export const UsersList = ({users}) => {

    return (
        <>
            <h1 className={styles.title}>Our users</h1>
            <ul className={styles.user_list}>
                {users.map(user => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </ul>
        </>
    )
}