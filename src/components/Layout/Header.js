import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import stylus from './Layout.module.css';

class Header extends Component {
    render() {
        const {location} = this.props;

        return (
            <header>
                <nav className={stylus.nav}>
                    <Link to="/" className={stylus.link}
                          style={{backgroundColor: location.pathname === '/' ? '#BB86FC' : 'rgba(255, 255, 255, 0.87)'}}>
                        Comments
                    </Link>
                    <Link to="/cars" className={stylus.link}
                          style={{backgroundColor: location.pathname === '/cars' ? '#BB86FC' : 'rgba(255, 255, 255, 0.87)'}}>
                        Cars
                    </Link>
                    <Link to="/posts" className={stylus.link}
                          style={{backgroundColor: location.pathname === '/posts' ? '#BB86FC' : 'rgba(255, 255, 255, 0.87)'}}>
                        Posts
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;
