import React from 'react';
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {deepOrange} from "@mui/material/colors";

export const Error = () => {
    return (
        <Container sx={{marginTop: '30vh'}}>
            <Typography sx={{color: deepOrange[700], fontSize: '36px', textAlign: 'center'}}>Error, something went
                wrong</Typography>
        </Container>
    );
};

