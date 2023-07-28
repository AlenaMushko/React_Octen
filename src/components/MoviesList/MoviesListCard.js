import {Link} from 'react-router-dom';
import {useEffect} from "react";
import {Card, CardBody, Flex, Heading, Spacer, Text} from "@chakra-ui/react";

import {PosterPreview} from "./PosterPreview";
import {GenreBadge} from "./GenreBadge";
import {AppRoutes} from "../../routing/appRoutes";

export const MoviesListCard = ({item, pageType, backLinkHref}) => {
    const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        poster_path,
        release_date,
        title, original_title,
        vote_average,
    } = item;

    let releaseDate = '';
    if (release_date) {
        releaseDate = release_date.slice(0, 4);
    }

    const movieLink = `${AppRoutes.MOVIE}/${id}`;
    const linkToUse = pageType === "tv" ? "/tv" : movieLink;

    useEffect(() => {
        localStorage.setItem('backLinkHref', backLinkHref);
    }, [backLinkHref]);

    return (
        <Card
            maxW="2xs"
            transition="boxShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
                boxShadow: "0px 8px 43px rgba(34, 178, 218, 0.7)",
            }}
        >
            <Link
                to={{
                    pathname: linkToUse,
                    state: {backLinkHref}, // Передаємо backLinkHref як стан
                }}
                // to={linkToUse}
            >
                <PosterPreview backdropPath={backdrop_path} posterPath={poster_path} stars={vote_average}
                               secondTitle={original_title} title={title}
                               adult={adult}/>
                <CardBody>
                    <Heading size="md">{title || original_title || ''}</Heading>
                    <Flex alignItems="baseline" spacing='6'>
                        <GenreBadge genre={genre_ids}/>
                        <Spacer/>
                        <Text fontSize="l" pl={4} color="gray.400">
                            {releaseDate || ''}
                        </Text>
                    </Flex>
                </CardBody>
            </Link>
        </Card>
    );
};


