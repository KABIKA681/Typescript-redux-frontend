import * as React from 'react';
import { useLocation } from 'react-router-dom'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function FormRow() {

    const location = useLocation()
    const country = location.state
    console.log(country)

    return (
        <React.Fragment>
            <Grid item xs={8} >
                <ul className='mb-2'>
                    <li >native-name: {country.name}</li>
                    <li>population: {country.population}</li>
                    <li>region: {country.region}</li>
                    <li>currency: {country.currency}</li>
                    <li >native-name: {country.name}</li>
                    <li>population: {country.population}</li>
                    <li>region: {country.region}</li>
                    <li>currency: {country.currency}</li>
                </ul>
            </Grid>

        </React.Fragment>
    );
}

export default function TableDetail() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid container item spacing={1}>
                    <FormRow />
                </Grid>

            </Grid>
        </Box>
    );
}