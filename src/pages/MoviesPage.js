import {Outlet, useLocation} from "react-router-dom";
import {useContext, useState, useEffect} from "react";

import {MoviesList, Pagination, SearchMovies} from "../components";
import {LoaderContext} from "../routing/LoaderProvider";
import {moviesService} from "../services";

export const MoviesPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    let moviesLength=movies.length;

    const location = useLocation();
    const backLinkHref = location.pathname ?? '/';

    useEffect(() => {
        if (searchQuery !== '' && searchQuery !== ' ') {
            setIsLoading(true);
            moviesService.getSearch(currentPage, searchQuery)
                .then((res) => {
                    setMovies(res.data.results);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching movies:", error);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(true);
            moviesService.getAll(currentPage)
                .then((res) => {
                    setMovies(res.data.results);
                    setTotalPages(res.data.total_pages)
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching movies:", error);
                })
                .finally(setIsLoading(false));
            setCurrentPage(1);
        }
    }, [currentPage, searchQuery, setIsLoading]);

    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            setSearchQuery(inputValue.trim());
        }
        setInputValue('')
    };

    return (
        <>
            <SearchMovies handleSearch={handleSearch}
                          inputValue={inputValue}
                          setInputValue={setInputValue}/>
            <Outlet/>
            <MoviesList data={movies} pageType={'movies'} backLinkHref={backLinkHref}/>
            <Pagination moviesLength={moviesLength} page={currentPage} totalPages={totalPages}/>
        </>
    );
};
