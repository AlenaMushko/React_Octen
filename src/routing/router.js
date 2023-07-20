import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";

import {AlbumsPage, CommentIdPage, CommentsPage, TodosPage} from "../pages";
import {AppLayout} from "../components";
import {AppRoutes} from "./appRoutes";
import Error from "../components/Error/Error";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: AppRoutes.HOME,
                element: (
                    <div>
                        <h1 style={{color: "orange"}}>Hello, welcom to my home work</h1>
                    </div>
                ),
            },
            {
                path: AppRoutes.ALBUMS,
                element: <AlbumsPage/>,
            },
            {
                path: AppRoutes.TODOS,
                element: <TodosPage/>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <CommentsPage/>,
                children: [
                    {
                        path: AppRoutes.COMMENT_ID,
                        element: <CommentIdPage/>,
                    },
                ]
            },
            {
                path: "*",
                element: <Error />,
            },
        ]
    }
]);
