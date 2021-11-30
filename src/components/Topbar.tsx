import React, {useState } from 'react'



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
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className='w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16'>
                <div className='flex-container mx-auto'>
                    <h1 className='font-bold text-xl'>
                        Here is the challenge
                    </h1>
                    <div className='ml-auto font-medium'>
                    <button onClick={() => toggleDarkMode()}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
function far(arg0: string, far: any, arg2: number, arg3: string): [any, any] {
    throw new Error('Function not implemented.')
}

