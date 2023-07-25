import {useContext} from "react";

import {LoaderContext} from "../routing/LoaderProvider";
import { useParams} from "react-router-dom";
import {MovieInfo} from "../components/MoviesList";

 export const MovieIdPage = () => {

     const {setIsLoading} = useContext(LoaderContext)
     const { id } = useParams();
     return (
         <>
             MovieIdPage
             <MovieInfo setIsLoading={setIsLoading} id={id}/>
         </>
     );
 };
