import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {FormControl, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";

import {CarsValidators} from "../../validators";
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slices/carsSlice";

export const CarForm = () => {
    const {register, reset, setValue, handleSubmit, formState: {errors, isValid}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(CarsValidators),
    });

    const dispatch = useAppDispatch();

    const {carForUpdate} = useAppSelector(state => state.cars)

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
            setValue('photo', carForUpdate.photo || '');
        }
    }, [carForUpdate, setValue]);

    const handleSave: SubmitHandler<ICar> = async (car) => {

        await dispatch(carActions.create({car}))
        reset()
    };

    const handleUpdate: SubmitHandler<ICar> = async (car) => {
        if (carForUpdate) {
            await dispatch(carActions.update({id: carForUpdate.id, car}))
            reset()
        }

    };
useState()

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            mt: 7,
            gap: 5
        }}>

            <FormControl component="form" onSubmit={handleSubmit(carForUpdate ? handleUpdate : handleSave)}
                         sx={{width: '70%', gap: 3}}>
                <TextField
                    label="Brend"
                    variant="outlined"
                    type="string"
                    InputLabelProps={{
                        shrink: true
                    }}
                    {...register('brand')}
                    error={!!errors.brand}
                    helperText={errors.brand?.message as string}
                />
                <TextField
                    label="Price"
                    variant="outlined"
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}                    {...register('price')}
                    error={!!errors.price}
                    helperText={errors.price?.message as string}
                />
                <TextField
                    label="Year"
                    variant="outlined"
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}
                    {...register('year')}
                    error={!!errors.year}
                    helperText={errors.year?.message as string}
                />
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon/>}
                    sx={{padding: '12px'}}
                    disabled={!isValid}
                >
                    {carForUpdate ? 'Update' : 'Create'}
                </Button>
            </FormControl>
        </Box>
    );
};

