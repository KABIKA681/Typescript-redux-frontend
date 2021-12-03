import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


const data = [
    {
        src: 'https://flagcdn.com/rw.svg',
        name: 'Rw.....',
        Population: '.......',

    },
    {
        src: 'https://flagcdn.com/cd.svg',
        name: 'Congo....',
        Population: '........',


    },
    {
        src: 'https://flagcdn.com/al.svg',
        name: 'Al....',
        Population: '..........',

    },
];

interface CountryProps {
    loading?: boolean;
}

function Media(props: CountryProps) {
    const { loading = false } = props;

    return (
        <Grid container wrap="wrap">
            {(loading ? Array.from(new Array(4)) : data).map((item, index) => (
                <Box key={index} sx={{ width: 300, marginRight: 6, my: 3 }}>
                    {item ? (
                        <img
                            style={{ width: 300, height: 180 }}
                            alt={item.name}
                            src={item.src}
                        />
                    ) : (
                        <Skeleton variant="rectangular" width={300} height={180} />
                    )}
                    {item ? (
                        <Box sx={{ pr: 2 }}>
                            <Typography gutterBottom variant="body2">
                                {item.name}
                            </Typography>
                        </Box>
                    ) : (
                        <Box sx={{ pt: 0.1 }}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton width="80%" />
                        </Box>
                    )}
                </Box>
            ))}
        </Grid>
    );
}

export default function Loader() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
            <Media loading />
            <Media loading />
            <Media loading />

        </Box>
    );
}

