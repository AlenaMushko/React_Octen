import styles from './UserDetails.module.css';


export const UserDetails = ({id, name, username, email, phone, website}) => {
    return (
        <>
            <h3 className={styles.user_details}>№{id} {name}</h3>
            <p><b>username:</b> {username}</p>
            <p><b>email:</b> {email}</p>
            <p><b>phone:</b> {phone}</p>
            <p><b>website:</b> {website}</p>
        </>
    )
}

