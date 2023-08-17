import React, {useContext} from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';

import {AppRoutes} from '../../routing'
import styles from './AppLayout.module.css';
import {Loader} from "../Loader";


export const AppLayout = () => {
    const links = [
        {
            path: AppRoutes.HOME,
            label: 'Home'
        },
        {
            path: AppRoutes.EPISODES,
            label: 'Episodes'
        },
        {
            path: AppRoutes.CHARACTERS,
            label: 'Characters'
        },
    ]
    const {pathname} = useLocation();

    return (<>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    {links.map((link) => (
                        <Link key={link.path} style={{
                            backgroundColor: link.path === pathname ? 'blue' : '', borderRadius: '8px',
                            padding: '8px', color: 'white', textDecoration: 'none'
                        }}
                              to={link.path}>{link.label}</Link>
                    ))}
                </nav>

                <div>
                    <hr/>
                    <h1 style={{textAlign:'center'}}>Rick & Morty</h1>
                </div>
            </header>

            <Outlet/>
        </>
    );
};
