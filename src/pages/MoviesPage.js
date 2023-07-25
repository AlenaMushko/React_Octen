import {Outlet} from "react-router-dom";
import {useContext} from "react";

import { Container, MoviesList} from "../components";
import {LoaderContext} from "../routing/LoaderProvider";

export const MoviesPage = () => {
    const {setIsLoading} = useContext(LoaderContext)

    return (
        <Container>
            <Outlet/>
            <hr/>
            MoviesPage
            <MoviesList setIsLoading={setIsLoading}/>
        </Container>
    );
};
