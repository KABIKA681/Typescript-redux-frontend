import React from 'react'
import Button from '@mui/material/Button';
import { BeakerIcon } from '@heroicons/react/solid'


const  Home = () => {
    return (
        <div className='home'>
            Home page
            <Button variant="contained">Hello World</Button>
            <BeakerIcon className="h-5 w-5 text-blue-500"/>


        </div>
    )
}

export default Home
