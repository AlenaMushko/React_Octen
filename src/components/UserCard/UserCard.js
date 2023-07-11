import {UserDetails} from "../UserDetails/UserDetails";
import {UserAddress} from "../UserAddress/UserAddress";
import {Company} from "../Company/Company";

import styles from './UserCard.module.css';

export const UserCard = ({user}) => {
    const {id, name, username, email, phone, website, address, company} = user;
    return (
        <li className={styles.user_item}>
            <UserDetails id={id}
                         name={name}
                         username={username}
                         email={email}
                         phone={phone}
                         website={website}/>
            <UserAddress address={address}/>
            <Company company={company}/>
        </li>
    )
}