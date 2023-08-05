import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';


const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter basename="React_Octen">
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);


