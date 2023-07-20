import {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import styles from './Albums.module.css';

export const Albums = ({setIsLoading}) => {
    const [albums, setAlbums] = useState(null);

    const getAllAlbums = async () => {
        setIsLoading(true);
        try {
            const {data} = await albumsService.getAll();
            return data;
        } catch (err) {
            console.log(err.message);
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

