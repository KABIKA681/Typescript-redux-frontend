import React, {useState } from 'react'
import Button from '@mui/material/Button';



const Topbar = () => {
    

    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState("")

    const toggleDarkMode = () => {
        if (mode) {
            document.documentElement.classList.add('dark')
            setToggleBtn("")
            setMode(current => current = !current)
        }
        if (!mode) {
            document.documentElement.classList.remove('dark')
            setMode(current => current = !current)
        }
    }

    return (
        <header className=' flex items-center justify-arround fixed w-full bg-transparent  py-5 px-10'>
            
                <div className='ml-60 font-bold text-gray-700 dark:text-white text-4xl'>
                    <h1 className='font-bold text-xl '> MY LIST </h1>
                </div>
                    
                <div className='ml-auto font-medium'>
                    <Button>theme</Button>   
                </div>
            </header>
    )
}

export default Topbar


