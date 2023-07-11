
import styles from './SubChild2&2.module.css';

export const SubChild22=({handleSendData})=>{
    const data='Вона: — Я, між iншим, також програмістка!\n' +
        'Він: — На чім пишеш?\n' +
        '— Не розуміла.\n' +
        '— Ну, програми на чім пишеш?\n' +
        '— А-а-а… На комп’ютері!'
    return(
        <button className={styles.btn} onClick={()=>handleSendData(data)}>Send data</button>
    )
}