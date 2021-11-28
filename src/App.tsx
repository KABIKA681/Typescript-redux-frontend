import React from 'react'
import Routes1 from './Routes1';
import Sidebar from './pages/SideBar/Sidebar';

function  App() {
    return (
        <>
        <Sidebar />
        <div className='App'>
            <Routes1 />
            </div>
        </>
    )
}
export default App;