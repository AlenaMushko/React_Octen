import React from 'react';

export const EpisodeItem = ({item}) => {
    const {id, name, episode} = item;
    return (
        <li key={id}>
            <h3>{id}. {name}</h3>
            <p>Chapter:{episode}</p>
        </li>
    );
};

