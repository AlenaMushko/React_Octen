import  {useContext} from 'react';

import {LoaderContext} from "../routing/LoaderProvider";
import {Todos, Container} from "../components";

export const TodosPage = () => {
    const {setIsLoading} = useContext(LoaderContext)

    return (
        <Container>
            <Todos setIsLoading={setIsLoading}/>
        </Container>
    );
};
