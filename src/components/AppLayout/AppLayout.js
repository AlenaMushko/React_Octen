import React from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';

import {AppRoutes} from '../../routing'
import styles from './AppLayout.module.css';
import {useSelector} from "react-redux";

export const AppLayout = () => {
    const {nameEpisode} = useSelector(state => state.episode)
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
                            backgroundColor: link.path === pathname ? '#1b1b69' : '', borderRadius: '8px',
                            padding: '8px', color: 'white', textDecoration: 'none'
                        }}
                              to={link.path}>{link.label}</Link>
                    ))}
                </nav>
                <hr/>
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline'}}>

                    <h1 style={{textAlign: 'center', color: '#1b1b69'}}>Rick & Morty</h1>
                    {nameEpisode && <h2>Episode is - "{nameEpisode}"</h2>}
                </div>
            </header>

            <Outlet/>
        </>
    );
};
