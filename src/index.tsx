import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from 'react-router-dom';
import './index.css';
import {router} from "./routing/router";
import {LoaderProvider} from "./routing/LoaderProvider";

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <LoaderProvider>
            <RouterProvider router={router} />
        </LoaderProvider>
    </React.StrictMode>
);


