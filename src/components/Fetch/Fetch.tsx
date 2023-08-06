import React from "react";

import styles from "../TestUseMemo/TestUseMemo.module.css";
import {useFetch} from "../../hooks";

type TItem ={
    id: number;
    title: string;
    name: string;
    email: string;
    phone: string;
    body: string;
}

interface IProps{
    url:string,
}
export const Fetch:React.FC<IProps> = ({url}) => {
    const {data} = useFetch(url) as unknown as {data: TItem[], loading: boolean, error: any};

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

