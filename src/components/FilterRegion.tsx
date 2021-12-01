import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fontFamily } from '@mui/system';


export default function FilterRegion() {
    const [region, setRegion] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value as string);
    };

    return (
        <Box sx={{
            minWidth: 120,
            borderRadius: 5,
            m: 3,
            ml: 70,  
            
        }}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" style={{marginTop: -10 }}>Region</InputLabel>
                <Select style={{height:36, backgroundColor:"white" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Region"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Africa</MenuItem>
                    <MenuItem value={2}>America</MenuItem>
                    <MenuItem value={3}>Asia</MenuItem>
                    <MenuItem value={4}>Europe</MenuItem>
                    <MenuItem value={5}>Oceania</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}