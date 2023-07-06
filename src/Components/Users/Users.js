import {users} from "../../mockData/jsonplaceholder";
import {UserCard} from "../UserCard/UserCard";
import styles from './Users.module.css';


export const Users = ({handleClick})=>{
    return(
        <ul className={styles.usersWrap}>
            {users?.map(user=>(
                <UserCard key={user.id} user={user} handleClick={handleClick}/>
                ))}
        </ul>
    )
}