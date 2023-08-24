import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {deepOrange} from "@mui/material/colors";
import {FormControl, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import {LoginValidators} from "../validators";
import {IAuth} from "../interfaces";

 const LoginPage = () => {
     const {register,reset, handleSubmit, formState:{errors, isValid} } = useForm({
         mode: 'all',
         resolver: joiResolver(LoginValidators),
     });
     const onSubmit = (data:IAuth) => {
         console.log(data);

         reset();
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
             <Typography sx={{ fontWeight: 500, fontSize: '32px', color: deepOrange[500] }}>LOGIN FORM</Typography>
             <FormControl component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '70%', gap: 3 }}>
                 <TextField
                     label="Name"
                     variant="outlined"
                     {...register('name')}
                     error={!!errors.name}
                     helperText={errors.name?.message as string}
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
                     Login
                 </Button>
             </FormControl>
         </Box>
     );
 };

export  default LoginPage;
