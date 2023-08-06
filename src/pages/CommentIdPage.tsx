import React, {useContext} from "react";
import { useParams} from "react-router-dom";

import {CommentById, Container} from "../components";
import {LoaderContext} from "../routing/LoaderProvider";

export const CommentIdPage:React.FC = () => {
    const {setIsLoading} = useContext(LoaderContext)
    const { id } = useParams() as {
        id: string;
    };

    return (
        <Container>
            <CommentById setIsLoading={setIsLoading} id={id}/>
        </Container>
    );
};
