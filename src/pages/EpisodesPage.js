import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {episodeActions} from "../redux";
import {EpisodesList, Loader, Pagination} from "../components";

export const EpisodesPage = () => {
    const dispatch = useDispatch();
    const {page, error, isLoading} = useSelector(state => state.episode);

    useEffect(() => {
        dispatch(episodeActions.all(page))
    }, [page]);

    return (
        <div>
            {isLoading && <Loader/>}
            {error && <h2>{JSON.stringify(error)}</h2>}
            <EpisodesList/>

            <Pagination/>
        </div>
    );
};

