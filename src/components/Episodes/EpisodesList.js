import React from 'react';
import {EpisodeItem} from "./EpisodeItem";
import {useSelector} from "react-redux";

export const EpisodesList = () => {
    const {episodes} = useSelector(state => state.episode);

    return (
        <section>
            <ul>
                {episodes?.map((episode) => (
                    <EpisodeItem key={episode.id} item={episode}/>
                ))}
            </ul>
        </section>
    );
};

