import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import './index.css';
import {router} from "./routing/router";
import {LoaderProvider} from "./routing/LoaderProvider";
// import {Loader} from "./components/Loader";
import {ThemeProvider} from "./themes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <ChakraProvider>
                <LoaderProvider>
                    <RouterProvider router={router}
                        // fallbackElement={<Loader />}
                    />
                </LoaderProvider>
            </ChakraProvider>
        </ThemeProvider>
    </React.StrictMode>
);


