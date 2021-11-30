import React from 'react'
import Routes1 from './Routes1';
import Sidebar from './components/Sidebar';
import { createTheme } from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'

//create MATERIAL UI theme
const theme = createTheme({

    palette: {
        primary: {
          main: '#f2aa26',
          dark: '#f09c01',
        },
        secondary: {
          main: '#11cb5f',
        },
        text: {
          primary: '#373585',
          secondary: '#a4a6b3',
        },
        background: {
          default: '#f7f8fc',
        },
      },
      typography: {
        fontFamily: 'Poppins, sans- serif',
        fontWeightBold: 700,
        fontWeightMedium: 600,
        fontWeightRegular: 400,
        htmlFontSize: 8,
      },
})


function  App() {
    return (
        <ThemeProvider theme={theme}>
        <>      
        <Sidebar />
        <div className='App'>
            <Routes1 />
            </div> 
            </>
            </ThemeProvider >
    )
}
export default App;