import React from 'react';
import MuiLink from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import {AppRoutes} from '../routing/appRoutes';
import {deepOrange, orange} from "@mui/material/colors";

export const Header: React.FC = () => {
    const isLogin = false;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1, gradient:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
                    Cars
                </Typography>
                {isLogin ? (
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 8}}>
                        <Typography>Cars</Typography>
                        <Button color="inherit" variant="outlined" component={RouterLink} to={AppRoutes.HOME}
                                sx={{'&:hover': {backgroundColor: deepOrange[500]}
                                }}>Logout</Button>
                    </Box>
                ) : (
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 8}}>
                        <Button color="inherit" variant="outlined" component={RouterLink}
                                to={AppRoutes.LOGIN}
                                sx={{'&:hover': {backgroundColor: deepOrange[500]}
                                }}
                        >Login</Button>
                        <Button color="inherit" variant="outlined" component={RouterLink}
                                to={AppRoutes.REGISTER}
                                sx={{'&:hover': {backgroundColor: deepOrange[500]}
                                }}
                        >Register</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};
