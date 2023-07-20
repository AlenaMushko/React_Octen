import React, {useContext} from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';

import {LoaderContext} from "../../routing/LoaderProvider";
import {Loader} from "../Loader";
import styles from './AppLayout.module.css';
import {AppRoutes} from '../../routing/appRoutes';

export const AppLayout = () => {
    const {isLoading} = useContext(LoaderContext);

    const links = [
        {
            path: AppRoutes.HOME,
            label: 'Home'
        },
        {
            path: AppRoutes.ALBUMS,
            label: 'Albums'
        },
        {
            path: AppRoutes.TODOS,
            label: 'Todos'
        },
        {
            path: AppRoutes.COMMENTS,
            label: 'Comments'
        }
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
            </header>
            {isLoading && <Loader/>}
            <Outlet/>
        </>
    );
};
