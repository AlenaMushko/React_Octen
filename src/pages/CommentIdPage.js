import {useContext} from "react";

import {CommentById, Container} from "../components";
import {LoaderContext} from "../routing/LoaderProvider";
import { useParams} from "react-router-dom";

export const CommentIdPage = () => {
    const {setIsLoading} = useContext(LoaderContext)
    const { id } = useParams();
    return (
        <Container>
            <CommentById setIsLoading={setIsLoading} id={id}/>
        </Container>
    );
};
