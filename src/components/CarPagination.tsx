import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {Pagination} from '@mui/material';

import {carActions} from "../redux/slices/carsSlice";
import {ILocation} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

interface IProps {
    location: ILocation;
}

export const CarPagination: React.FC<IProps> = ({location}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const queryParams = new URLSearchParams(location.search);
    const currentPage = Number(queryParams.get('page') || '1');
    const page_size = Number(queryParams.get('page_size') || '5');

    const {totalPages} = useAppSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.getAll({page: currentPage, page_size}));
    }, [dispatch, currentPage]);

    useEffect(() => {
        queryParams.set('page', String(currentPage));
        navigate(location.pathname + "?" + queryParams.toString());
    }, [currentPage]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        queryParams.set('page', String(page));
        navigate(location.pathname + "?" + queryParams.toString());
    };

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: '60px'}}>
            <Pagination showFirstButton showLastButton
                        variant={"outlined"}
                        count={totalPages || 0}
                        page={currentPage}
                        onChange={handlePageChange}
            />
        </Box>
    );
};

