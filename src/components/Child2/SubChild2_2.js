
import styles from './SubChild2_2.module.css';

export const SubChild2_2=({handleSendData})=>{
    const data='Вона: — Я, між iншим, також програмістка!\n' +
        'Він: — На чім пишеш?\n' +
        '— Не розуміла.\n' +
        '— Ну, програми на чім пишеш?\n' +
        '— А-а-а… На комп’ютері!'
    return(
        <button className={styles.btn} onClick={()=>handleSendData(data)}>Send data</button>
    )
}