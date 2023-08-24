import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {blue, deepOrange, orange} from "@mui/material/colors";

import {AppRoutes} from '../routing/appRoutes';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {authService} from "../services";
import {authActions} from "../redux/slices/authSlice";

export const Header: React.FC = () => {
    const {owner} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    if (authService.getAccesToken() && !owner) {
        dispatch(authActions.owner())
    }

    const handleLogout = () => dispatch(authActions.logout());
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{
                    flexGrow: 1,
                    gradient: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
                }}>
                    Cars
                </Typography>
                {owner ? (
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 8}}>
                        <Box sx={{bgcolor: orange[800], color: blue[900], borderRadius: '50%', padding: '12px'}}>
                            <Typography>{owner.username}</Typography>
                        </Box>
                        <Button color="inherit" variant="outlined" component={RouterLink} to={AppRoutes.LOGIN}
                                onClick={handleLogout}
                                sx={{
                                    '&:hover': {backgroundColor: deepOrange[500]}
                                }}>Logout</Button>
                    </Box>
                ) : (
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 8}}>
                        <Button color="inherit" variant="outlined" component={RouterLink}
                                to={AppRoutes.LOGIN}
                                sx={{
                                    '&:hover': {backgroundColor: deepOrange[500]}
                                }}
                        >Login</Button>
                        <Button color="inherit" variant="outlined" component={RouterLink}
                                to={AppRoutes.REGISTER}
                                sx={{
                                    '&:hover': {backgroundColor: deepOrange[500]}
                                }}
                        >Register</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};
