import {Link, useParams} from "react-router-dom";
import {Box, Button} from "@chakra-ui/react";

import {MovieInfo} from "../components/MoviesList";
import {RxExit} from "react-icons/rx";

export const MovieIdPage = () => {
    const {movieId} = useParams();

    const backLinkHref = localStorage.getItem('backLinkHref') || '/';

    return (
        <>
            <Link to={backLinkHref} style={{textDecoration: 'none'}}>
                <Button
                    colorScheme="rgb(0, 0, 0, 0.64)"
                    variant="outline"
                    margin='30px 0'
                    _hover={{
                        backgroundColor: '#22559c',
                        color: 'rgb(253, 253, 253)'
                    }}>
                    <Box marginRight="12px"><RxExit/></Box> Go to home page
                </Button>
            </Link>
            <MovieInfo movieId={movieId}/>
        </>
    );
};
