import React, {useContext} from 'react';

import {LoaderContext} from "../routing/LoaderProvider";
import {Todos, Container} from "../components";

export const TodosPage:React.FC = () => {
    const {setIsLoading} = useContext(LoaderContext)

    return (
        <Container>
            <Todos setIsLoading={setIsLoading}/>
        </Container>
    );
};
