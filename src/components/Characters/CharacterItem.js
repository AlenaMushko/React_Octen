import React from 'react';

import styles from './Characters.module.css'

export const CharacterItem = ({item}) => {
    const {id, name, image} = item;
    return (
        <li key={id} className={styles.itemFlex}>
            <h3>{id}. {name}</h3>
            <img src={image} alt={name} className={styles.img}/>
        </li>
    );
};

