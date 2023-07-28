import {Outlet, useLocation} from "react-router-dom";
import {useContext, useState, useEffect} from "react";

import {MoviesList, Pagination, SearchMovies} from "../components";
import {LoaderContext} from "../routing/LoaderProvider";
import {moviesService} from "../services";
import {NotMovies} from "../components/NotMovies";

export const MoviesPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [notMovie, setNotMovie] = useState(false);

    const location = useLocation();
    const backLinkHref = location.pathname ?? '/';

    useEffect(() => {
        if (isSearch === true) {
            setCurrentPage(1);
        }
    }, [isSearch])

    useEffect(() => {
        if (searchQuery !== '' && searchQuery !== ' ') {
            setIsLoading(true);
            moviesService.getSearch(currentPage, searchQuery)
                .then((res) => {
                    setNotMovie(res.data.results.length === 0)
                    setMovies(res.data.results);
                    setTotalPages(res.data.total_pages)
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching movies:", error);
                })
                .finally(() => {
                    setIsLoading(false);
                    setIsSearch(false);
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
        }
    }, [currentPage, searchQuery, setIsLoading]);

    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            setIsSearch(true);
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
            {notMovie && <NotMovies searchQuery={searchQuery}/>}
            <MoviesList data={movies} pageType={'movies'} backLinkHref={backLinkHref}/>
            <Pagination page={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
        </>
    );
};
