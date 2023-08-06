import React, {useContext} from 'react';

import {LoaderContext} from "../routing/LoaderProvider";
import {Albums, Container} from "../components";

export const AlbumsPage:React.FC = () => {
    const {setIsLoading} = useContext(LoaderContext)

    return (
        <Container>
            <Albums setIsLoading={setIsLoading}/>
        </Container>
    );
};




