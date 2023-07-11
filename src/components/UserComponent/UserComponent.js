import styles from './UserComponent.module.css';

export const UserComponent = ({user, showPosts}) => {

    const {id,name} = user;
    return (<li className={styles.user_item}>
        <h2>№{id} {name}</h2>
        <button className={styles.user_btn} onClick={()=>showPosts(user)}>show post</button>
    </li>)
}