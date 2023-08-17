import React from 'react';
import {EpisodeItem} from "./EpisodeItem";
import {useSelector} from "react-redux";

import styles from './Episodes.module.css'

export const EpisodesList = () => {
    const {episodes} = useSelector(state => state.episode);

    return (
        <section>
            <ul className={styles.list}>
                {episodes?.map((episode) => (
                    <EpisodeItem key={episode.id} item={episode}/>
                ))}
            </ul>
        </section>
    );
};

