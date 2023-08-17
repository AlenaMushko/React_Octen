import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {CharactersList, Loader} from "../components";
import {characterActions} from "../redux";

export const CharactersPage = () => {
    const dispatch = useDispatch();
    const {characters, idArr, error, isLoading} = useSelector(state => state.character);

    useEffect(() => {
        idArr?.forEach(id => {
            dispatch(characterActions.byId(id));
        });
    }, [idArr, dispatch]);

    return (
        <div>
            {isLoading && <Loader/>}
            {error && <h2>{JSON.stringify(error)}</h2>}
            {characters && <CharactersList/>}

        </div>
    );
};

