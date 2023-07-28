import {useContext, useEffect, useState} from "react";
import {Box, Text} from "@chakra-ui/react";

import {LoaderContext} from "../../routing/LoaderProvider";
import {genresService} from "../../services";

export const GenreBadge = ({genre}) => {
    const {setIsLoading} = useContext(LoaderContext);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        genresService.getAll()
            .then((res) => {
                setGenres(res.data.genres);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching genres:", error);
            })
            .finally(setIsLoading(false));
    }, [setIsLoading]);

    let filmGenreId = [];
    if (genre) {
        filmGenreId = genres
            .filter(({id}) => genre.includes(id))
            .map(({name}) => name)
    }

    let filmGenres = null;
    if (filmGenreId.length > 2) {
        filmGenres = filmGenreId.slice(0, 2).join(', ');
    } else{filmGenres =filmGenreId.join(', ')}

    return (
        <Box>
            <Text >{filmGenres || ''}</Text>
        </Box>
    );
};

