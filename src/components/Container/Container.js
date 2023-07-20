import styles from './Container.module.css';

export const Container = ({children}) => (
    <div className={styles.contain}>
        {children}
    </div>
);


