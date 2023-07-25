import {Outlet} from "react-router-dom";
import {useContext, useState,useEffect} from "react";
import {Container, IconButton, Input, InputGroup, InputRightElement} from '@chakra-ui/react'

import {  MoviesList} from "../components";
import {LoaderContext} from "../routing/LoaderProvider";
import {moviesService} from "../services";
import {SearchIcon} from "@chakra-ui/icons";

export const MoviesPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        moviesService.getAll(currentPage)
            .then((res) => {
                setMovies(res.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            })
            .finally(setIsLoading(false));
    }, [currentPage, setIsLoading]);

    const handleClick = () =>{
        console.log('hello')
    }


    return (
        <>
            <Container pt={10}>
            <InputGroup size='md' >
                <Input
                    pr='4.5rem'
                    placeholder='Search films'
                />
                <InputRightElement >
                    <IconButton
                        onClick={handleClick}
                        colorScheme='blue'
                        aria-label='Search database'
                        icon={<SearchIcon />}
                    />
                </InputRightElement>
            </InputGroup>
            </Container>

            <Outlet/>
            <MoviesList movies={movies}/>
        </>
    );
};
