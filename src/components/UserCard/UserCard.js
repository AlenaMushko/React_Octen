import styles from './UserCard.module.css';

export const UserCard = ({user, handleClick}) => {

    return (
        <li className={styles.user}>
            <h4>№{user.id}. {user.name}</h4>
            <button className={styles.userBtn} type='button' onClick={() => handleClick(user)}>Posts</button>
        </li>
    )
}

