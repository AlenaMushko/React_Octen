import styles from "./UserAddress.module.css";

export const UserAddress = ({address}) => {
    const {street, suite, city} = address;
    return (
        <>
            <h5 className={styles.user_address}>Address</h5>
            <p><b>street:</b> {street}</p>
            <p><b>suite:</b> {suite}</p>
            <p><b>city:</b> {city}</p>
        </>
    )
}

