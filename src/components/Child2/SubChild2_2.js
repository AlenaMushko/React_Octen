import {useContext} from "react";

import styles from './SubChild2_2.module.css';
import {DataContext} from "../../App";

export const SubChild2_2 = () => {
    const data = 'Вона: — Я, між iншим, також програмістка!\n' +
        'Він: — На чім пишеш?\n' +
        '— Не розуміла.\n' +
        '— Ну, програми на чім пишеш?\n' +
        '— А-а-а… На комп’ютері!';

    const dataContext = useContext(DataContext);
    return (
        <button className={styles.btn} onClick={() => dataContext.handleSendData(data)}>Send data</button>
    )
}