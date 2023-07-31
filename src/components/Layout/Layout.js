import React, {Component} from 'react';
import {useLocation, Route, Routes} from 'react-router-dom';

import Header from './Header';
import {Cars, Comments, Posts} from "../index";

class Layout extends Component {
    render() {
        return (
            <>
                <Header location={this.props.location}/>
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

function LayoutWithLocation() {
    const location = useLocation();

    return <Layout location={location}/>;
}

export default LayoutWithLocation;
