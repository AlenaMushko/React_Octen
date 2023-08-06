import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import styles from './Albums.module.css';

type TAlbum = {
    id:number;
    title:string;
}
interface IProps{
    setIsLoading:(isLoading: boolean)=>void,
}
export const Albums:React.FC<IProps> = ({setIsLoading}) => {
    const [albums, setAlbums] = useState<TAlbum[] | null>(null);

    const getAllAlbums = async () => {
        setIsLoading(true);
        try {
            const {data} = await albumsService.getAll();
            return data;
        } catch (err) {
            const error = err as Error;
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllAlbums()
            .then(res => setAlbums(res));
    }, []);

    return (
        <section>
            <h2 className={styles.title}>Albums</h2>
            <ul>
                {albums?.map(({id, title}) => (
                    <li key={id}>
                        <p><b>{id}. </b>{title}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

