import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {FormControl, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { deepOrange } from '@mui/material/colors';
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import {RegisterValidators} from "../validators";
import {IAuth} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {authActions} from "../redux/slices/authSlice";

const RegisterPage = () => {
    const {register,reset, handleSubmit, formState:{errors, isValid} } = useForm({
        mode: 'all',
        resolver: joiResolver(RegisterValidators),
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {errorsRegister} = useAppSelector(state => state.auth);

    const registerUser:SubmitHandler<IAuth> = async (user) => {
        console.log(user)
      const {meta:{requestStatus}} = await dispatch(authActions.register({user}));
        console.log(requestStatus)
        if (requestStatus === 'fulfilled'){
            reset()
            // navigate(AppRoutes.LOGIN)
        }

    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            mt: 7,
            gap: 5
        }}>
            <Typography sx={{ fontWeight: 500, fontSize: '32px', color: deepOrange[500] }}>REGISTER FORM</Typography>
            <FormControl component="form" onSubmit={handleSubmit(registerUser)} sx={{ width: '70%', gap: 3 }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    {...register('username')}
                    error={!!errors.username}
                    helperText={errors.username?.message as string}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message as string}
                />
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{ padding: '12px' }}
                    disabled={!isValid}
                >
                    Register
                </Button>
                {errorsRegister?.username && <Typography sx={{  color: deepOrange[500] }}>user with this  name already exists</Typography>}
            </FormControl>
        </Box>
    );
};

export default RegisterPage
