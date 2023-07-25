import {PosterPreview} from "./PosterPreview";
import {MovieInfo} from "./MovieInfo";
import {GenreBadge} from "./GenreBadge";
import {Card, CardBody, Flex, Heading, Spacer,  Text} from "@chakra-ui/react";

export const MoviesListCard = ({movie}) => {
    console.log(movie)
    const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        original_language,
        overview,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
    } = movie;

    const releaseDate = release_date.slice(0, 4);

    return (
        <Card
            maxW="2xs"
            transition="boxShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
                boxShadow: "0px 8px 43px rgba(34, 178, 218, 0.7)",
            }}
        >
            <PosterPreview backdropPath={backdrop_path} posterPath={poster_path} stars={vote_average} title={title}
                           adult={adult}/>
            <CardBody>

                <GenreBadge genre={genre_ids}/>

                    <Flex alignItems="baseline" spacing='6'>
                        <Heading size="md">{title}</Heading>
                        <Spacer />
                        <Text fontSize="l" pl={4} color="gray.400">
                            {releaseDate}
                        </Text>
                    </Flex>
            </CardBody>


            <MovieInfo title={title} description={overview} label={backdrop_path} adult={adult}
                       originalLanguage={original_language}/>
        </Card>
    );
};


