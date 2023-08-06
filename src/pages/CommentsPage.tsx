import {Outlet} from "react-router-dom";
import  React, {useContext} from "react";

import {Comments, Container} from "../components";
import {LoaderContext} from "../routing/LoaderProvider";

 export const CommentsPage = () => {
    const {setIsLoading} = useContext(LoaderContext)

    return (
        <Container>
            <Outlet/>
            <hr/>
            <Comments setIsLoading={setIsLoading}/>
        </Container>
    );
};
