import {UserComponent} from "../UserComponent/UserComponent";
import styles from './UsersComponent.module.css';

export const UsersComponent = ({users, showPosts}) => {

    return (
        <ul className={styles.user_list}>
            {users.map(user => (
                <UserComponent key={user.id} user={user} showPosts={showPosts}/>
            ))}
        </ul>
    )
}