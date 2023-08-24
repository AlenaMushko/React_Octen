import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {deepOrange} from "@mui/material/colors";
import {FormControl, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import {IAuth} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {useNavigate} from "react-router-dom";
import {authActions} from "../redux/slices/authSlice";

const LoginPage = () => {
    const {register, reset, handleSubmit, formState: {isValid}} = useForm<IAuth>();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {errorsRegister} = useAppSelector(state => state.auth);
    const loginUser: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}));
        if (requestStatus === 'fulfilled') {
            reset();
            navigate("/cars")
        }
    }

    return (
        <Box sx={{
            display: 'flex ',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            mt: 7,
            gap: 5
        }}>
            <Typography sx={{fontWeight: 500, fontSize: '32px', color: deepOrange[500]}}>LOGIN FORM</Typography>
            <FormControl component="form" onSubmit={handleSubmit(loginUser)} sx={{width: '70%', gap: 3}}>
                <TextField
                    label="Name"
                    variant="outlined"
                    {...register('username')}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...register('password')}
                />
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon/>}
                    sx={{padding: '12px'}}
                    disabled={!isValid}
                >
                    Login
                </Button>
                {errorsRegister && <Typography sx={{color: deepOrange[500]}}>{errorsRegister.detail}</Typography>}
            </FormControl>
        </Box>
    );
};

export default LoginPage;
