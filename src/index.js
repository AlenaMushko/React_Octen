import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'

import './index.css';
import {router} from "./routing/router";
import {LoaderProvider} from "./routing/LoaderProvider";
import {ThemeProvider} from "./themes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <ChakraProvider>
                <ColorModeScript />
                <LoaderProvider>
                    <RouterProvider router={router}/>
                </LoaderProvider>
            </ChakraProvider>
        </ThemeProvider>
    </React.StrictMode>
);


