import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import styles from './Episodes.module.css'
import {setNameEpisode} from "../../redux";
import {AppRoutes} from "../../routing";
import {setIdArr} from "../../redux";

export const EpisodeItem = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCharacters=(data)=>{
        dispatch(setNameEpisode(data.name));
        navigate(AppRoutes.CHARACTERS);

        const charactersArr = data.characters.map(str=>str.replace('https://rickandmortyapi.com/api/character/',''));
        dispatch(setIdArr(charactersArr))
    }
    const {id, name, episode} = item;
    return (
        <li key={id} className={styles.item} onClick={()=>handleCharacters(item)} >
            <h3>{id}. {name}</h3>
            <p>Chapter:{episode}</p>
        </li>
    );
};

