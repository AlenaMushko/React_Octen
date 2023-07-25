import {MoviesListCard} from "./MoviesListCard";
import {Container, SimpleGrid} from "@chakra-ui/react";

export const MoviesList = ({movies}) => {
    return (
        <Container py={10}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing='2vw'>
            {movies?.map(movie=>(
                <MoviesListCard key={movie.id} movie={movie} />
            ))}
            </SimpleGrid>
        </Container>
    );
};

