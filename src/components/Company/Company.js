import styles from "./Company.module.css";

export const Company = ({company}) => {
    const {name, catchPhrase, bs} = company;
    return (
        <>
            <h5 className={styles.user_company}>Company in which works</h5>
            <p><b>name:</b> {name}</p>
            <p><b>catchPhrase:</b> {catchPhrase}</p>
            <p><b>bs:</b> {bs}</p>
        </>
    )
}

