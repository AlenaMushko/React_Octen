import styles from "../UsersForm/UsersForm.module.css";

export const Btn = ({value, valid, handleCreate}) => {

    return (
        <button type='submit'
                disabled={valid}
                className={styles.btn}
                onClick={handleCreate}
        >{value}</button>
    );
};



