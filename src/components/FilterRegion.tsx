import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function FilterRegion() {
    const [region, setRegion] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value as string);
    };

    return (
        <Box sx={{
            minWidth: 160,
            borderRadius: 5,
            m: 3,
            ml: 70,

        }}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" style={{ marginTop: -10, fontSize:14, fontFamily:'sans-serif', fontWeight:'400'}}>Select by region</InputLabel>
                <Select style={{ height: 36, backgroundColor: "white",fontSize:14, fontFamily:'sans-serif', fontWeight:'400'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Region"
                    onChange={handleChange}
                >
                    <MenuItem value={1} style={{ fontSize:14, fontFamily:'sans-serif', fontWeight:'400'}}>Africa</MenuItem>
                    <MenuItem value={2} style={{ fontSize:14, fontFamily:'sans-serif', fontWeight:'400'}}>America</MenuItem>
                    <MenuItem value={3} style={{ fontSize:14, fontFamily:'sans-serif', fontWeight:'400'}}>Asia</MenuItem>
                    <MenuItem value={4} style={{ fontSize:14, fontFamily:'sans-serif', fontWeight:'400'}}>Europe</MenuItem>
                    <MenuItem value={5} style={{ fontSize:14, fontFamily:'sans-serif', fontWeight:'400'}}>Oceania</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}