import React from 'react';
import Typography from '@mui/material/Typography';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slices/carsSlice";

interface IProps {
    item: ICar
}

export const CarItem: React.FC<IProps> = ({item}) => {
    const {id, photo, brand, year, price} = item;
    const dispatch = useAppDispatch();

    const handleDelete = async () => {
        await dispatch(carActions.deleteCar({id}))
    };
    return (
        <Card sx={{
            padding: '12px',
            transition: 'box-shadow 0.3s ease-in-out',
            boxShadow: '2px 0px 26px 0px rgba(68,138,255,0.75)',
            '&:hover': {
                boxShadow: '2px 0px 26px 0px rgba(221,44,0,0.75)'
            }
        }}>
            <CardContent>
                <ListItemAvatar>
                    <Avatar alt={brand} src={photo}/>
                </ListItemAvatar>
                <ListItemText primary={`Brand: ${brand}`}/>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography
                            component="div"
                            sx={{display: 'inline', fontWeight: 'bold'}}
                            variant="body2"
                            color="text.primary"
                        >
                            Рік:
                        </Typography>
                        <Typography component="div" sx={{display: 'inline'}} variant="body2" color="text.primary">
                            {year}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            component="div"
                            sx={{display: 'inline', fontWeight: 'bold'}}
                            variant="body2"
                            color="text.primary"
                        >
                            Ціна:
                        </Typography>
                        <Typography component="div" sx={{display: 'inline'}} variant="body2" color="text.primary">
                            {price}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>

            <Stack direction="row" sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Button variant="contained" startIcon={<DeleteIcon/>} onClick={handleDelete}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SyncAltIcon/>}
                        onClick={() => dispatch(carActions.setCarForUpdate({car: item}))}>
                    Update
                </Button>
            </Stack>
        </Card>
    );
}
