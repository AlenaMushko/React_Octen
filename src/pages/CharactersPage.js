import React from 'react';
import {useSelector} from "react-redux";

import {Loader} from "../components";

export const CharactersPage = () => {
    const {isLoading, error} = useSelector(state => state.constructor);
    return (
        <div>
            {isLoading && <Loader/>}
            {error && <h2>{JSON.stringify(error)}</h2>}

            CharactersPage

        </div>
    );
};

