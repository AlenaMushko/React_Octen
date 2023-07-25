import React, {useContext} from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';
import {ChakraProvider, Flex} from "@chakra-ui/react";
import {Container, Box, HStack} from '@chakra-ui/react'


import {LoaderContext} from "../routing/LoaderProvider";
import {Loader} from "./Loader";
import {AppRoutes} from '../routing/appRoutes';
import {ScrollToTopButton} from "./ScrollToTopButton/ScrollToTopButton";

import {ThemeContext, darkTheme, lightTheme, ThemeSwitcher} from "../themes";
import {UserInfo} from "./UserInfo";

export const AppLayout = () => {
    const {isLoading} = useContext(LoaderContext);
    const {isDark} = useContext(ThemeContext);

    const links = [
        {
            path: AppRoutes.HOME,
            label: 'All Movies'
        },
        {
            path: AppRoutes.POPULAR,
            label: 'Popular Movies'
        },
        {
            path: AppRoutes.REVENUE,
            label: 'Revenue Movies'
        },
        {
            path: AppRoutes.ANIMATION,
            label: 'Animation Movies'
        }
    ]
    const {pathname} = useLocation();

    return (
        <>
            <Box bg="rgb(240, 212, 58)" p={5}>
                <ChakraProvider theme={isDark ? darkTheme : lightTheme}>
                    <header>
                        <nav>
                            <Flex justifyContent="space-between" alignItems="center">
                                <HStack spacing="3vw">
                                    {links.map((link) => (
                                        <Link
                                            key={link.path}
                                            style={{
                                                backgroundColor: link.path === pathname ? 'blue' : '',
                                                borderRadius: '8px',
                                                padding: '8px',
                                                textDecoration: 'none',
                                                color: link.path === pathname ? 'rgb(253, 253, 253)' : '#22559c',
                                            }}
                                            to={link.path}>
                                            {link.label}
                                        </Link>))}
                                </HStack>
                                <HStack spacing="2vw">
                                    <ThemeSwitcher/>
                                    <UserInfo/>
                                </HStack>
                            </Flex>
                        </nav>
                    </header>
                </ChakraProvider>
            </Box>

            <Container maxW="90vw">
                {isLoading && <Loader/>}
                <ScrollToTopButton/>
                <Outlet/>
            </Container>
        </>
    );
};