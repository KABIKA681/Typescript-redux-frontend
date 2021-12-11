import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type props = {
    getRegion: (args: string) => void
}
export default function FilterRegion({ getRegion }: props) {
    const [region, setRegion] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        getRegion(event.target.value as string)
        setRegion(event.target.value as string);
    };

    return (
        <Box sx={{
            minWidth: 160,
            borderRadius: 5,
            m: 3.5,
            ml: 63,

        }}>
            <FormControl fullWidth style={{ display: "flex" }}>
                <InputLabel id="demo-simple-select-label" style={{ marginTop: -10, fontSize: 14, fontFamily: 'sans-serif', fontWeight: '400' }}>Select by region</InputLabel>
                <Select style={{ height: 36, backgroundColor: "white", fontSize: 14, fontFamily: 'sans-serif', fontWeight: '400' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Region"
                    onChange={handleChange}
                >
                    <MenuItem value="Africa" style={{ fontSize: 14, fontFamily: 'sans-serif', fontWeight: '400' }}>Africa</MenuItem>
                    <MenuItem value="America" style={{ fontSize: 14, fontFamily: 'sans-serif', fontWeight: '400' }}>America</MenuItem>
                    <MenuItem value="Asia" style={{ fontSize: 14, fontFamily: 'sans-serif', fontWeight: '400' }}>Asia</MenuItem>
                    <MenuItem value="Europe" style={{ fontSize: 14, fontFamily: 'sans-serif', fontWeight: '400' }}>Europe</MenuItem>
                    <MenuItem value="Oceania" style={{ fontSize: 14, fontFamily: 'sans-serif', fontWeight: '400' }}>Oceania</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}