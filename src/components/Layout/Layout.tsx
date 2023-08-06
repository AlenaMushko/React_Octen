import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from './Header';
import {Cars, Comments, Posts} from "../index";


export default class Layout extends Component {

    render() {
        return (
            <>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Comments/>}/>
                        <Route path="/cars" element={<Cars/>}/>
                        <Route path="/posts" element={<Posts/>}/>
                    </Routes>
                </main>
            </>
        );
    }
}


