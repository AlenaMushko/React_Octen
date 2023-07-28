import {useContext, useEffect, useState} from "react";

import {LoaderContext} from "../routing/LoaderProvider";
import {moviesService} from "../services";
import {MoviesList} from "../components";
import {useLocation} from "react-router-dom";

export const TvPage = () => {

    const {setIsLoading} = useContext(LoaderContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [tvs, setTvs] = useState([]);

    const location = useLocation();
    const backLinkHref = location.pathname ?? '/';

    useEffect(() => {
        setIsLoading(true);
        moviesService.getTv(currentPage)
            .then((res) => {
                setTvs(res.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            })
            .finally(setIsLoading(false));
    }, [currentPage, setIsLoading]);


    return (
     <MoviesList data={tvs} pageType={'tv'} backLinkHref={backLinkHref}/>
    );
};
