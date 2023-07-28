import {Link, useParams} from "react-router-dom";
import {Box, Button, useTheme} from "@chakra-ui/react";

import {MovieInfo} from "../components/MoviesList";
import {RxExit} from "react-icons/rx";

 export const MovieIdPage = () => {
     const { movieId } = useParams();
     const theme = useTheme();

     const backLinkHref = localStorage.getItem('backLinkHref') || '/';

     return (
         <>
             <Link to={backLinkHref} style={{textDecoration: 'none'}}>
                 <Button colorScheme={theme.colors.border} variant="outline"
                         margin='30px 0'
                         _hover={{backgroundColor: '#22559c',
                             color: 'theme.colors.secondary'}}>
                     <Box marginRight="12px"><RxExit/></Box> Go to home page
                 </Button>
             </Link>
             <MovieInfo movieId={movieId}/>
         </>
     );
 };
