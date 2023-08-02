import styles from "../TestUseMemo/TestUseMemo.module.css";
import {useFetch} from "../../hooks";

export const Fetch = ({url}) => {
    const {data} = useFetch(url);

    return (
        <section className={styles.section}>
            <h2>{url}</h2>
            <ul>
                {data && data.map(item => (
                    <li key={item.id}>
                        <h3>{item.id} {item.title || ''} {item.name || ''}</h3>
                        {item.email ? <h5 style={{color: 'blue'}}>email: {item.email }</h5>: ''}
                        {item.phone? <p>phone: {item.phone}</p>: ''}
                        <p>{item.body || ''}</p>
                    </li>
                ))}
            </ul>

        </section>
    );
};

