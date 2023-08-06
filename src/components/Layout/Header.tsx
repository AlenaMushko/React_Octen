import React, {Component} from 'react';

import stylus from './Layout.module.css';
import {NavLink} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header>
                <nav className={stylus.nav}>
                    <NavLink to="/" className={stylus.link}
                             style={({isActive}) => ({
                                 background: isActive ? '#BB86FC' : ' rgba(255, 255, 255, 0.87)',
                             })}
                    >Comments
                    </NavLink>
                    <NavLink to="/cars" className={stylus.link}
                             style={({isActive}) => ({
                                 background: isActive ? '#BB86FC' : ' rgba(255, 255, 255, 0.87)',
                             })}>Cars
                    </NavLink>
                    <NavLink to="/posts" className={stylus.link}
                             style={({isActive}) => ({
                                 background: isActive ? '#BB86FC' : ' rgba(255, 255, 255, 0.87)',
                             })}>Posts
                    </NavLink>
                </nav>
            </header>
        );
    }
}

export default Header;
