import {useContext, useEffect, useState} from "react";

import {LoaderContext} from "../routing/LoaderProvider";
import {moviesService} from "../services";
import {MoviesList, Pagination} from "../components";
import {useLocation} from "react-router-dom";

export const SoonPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [populars, setPopulars] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    const location = useLocation();
    const backLinkHref = location.pathname ?? '/';

    useEffect(() => {
        setIsLoading(true);
        moviesService.getSoon(currentPage)
            .then((res) => {
                setPopulars(res.data.results);
                setTotalPages(res.data.total_pages)
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            })
            .finally(setIsLoading(false));
    }, [currentPage, setIsLoading]);
    return (
        <>
            <MoviesList pageType={'popular'} data={populars} backLinkHref={backLinkHref}/>
            <Pagination  page={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
        </>
    );
};

