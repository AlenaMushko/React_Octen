import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TbArrowBigLeftLineFilled, TbArrowBigRightLineFilled} from "react-icons/tb";

import {decrementPage, episodeActions, incrementPage} from '../../redux';
import styles from "./Pagination.module.css";

export const Pagination = () => {
    const dispatch = useDispatch();
    const {page, episodes} = useSelector(state => state.episode);

    const handlePrevPage = () => {
        dispatch(decrementPage());
        dispatch(episodeActions.all(page - 1));
    }

    const handleNextPage = () => {
        dispatch(incrementPage());
        dispatch(episodeActions.all(page + 1));
    }

    return (
        <div className={styles.wrapper}>

            <button disabled={page === 1} onClick={handlePrevPage} className={styles.btn}>
                <TbArrowBigLeftLineFilled/>
            </button>
            <button disabled={episodes.length < 20} onClick={handleNextPage} className={styles.btn}>
                <TbArrowBigRightLineFilled/>
            </button>
        </div>
    );
};
