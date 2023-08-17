import React from 'react';
import {useSelector} from "react-redux";

import {CharacterItem} from "./CharacterItem";
import styles from '../Episodes/Episodes.module.css'

export const CharactersList = () => {
    const {characters} = useSelector(state => state.character);

    return (
        <section>
            <ul className={styles.list}>
                {characters?.map(character => (
                    <CharacterItem key={character.id} item={character}/>
                ))}
            </ul>
        </section>
    );
};

