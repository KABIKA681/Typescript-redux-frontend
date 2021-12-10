import React, { useContext } from "react";
import { Routes, Route, Link, Navigate, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home/Home";
import SingleCountryPage from "./pages/SingleCountryPage/SingleCountry";
import Tovisit from "./pages/ToVisit/Tovisit";
import Visited from "./pages/Visited/Visited";
import { Login } from './login/app/login'
import { AppStateContext } from './login/app/provider';
import { Register } from './login/app/register';
import { Profile } from './login/app/profile';
import { NotFound } from './login/app/not_Found';



export const Routespage: React.FC = () => {
    const { appState } = useContext(AppStateContext);


    return <BrowserRouter>
        <Routes>


            <header>
                {
                    appState.loggedIn ?
                        <div>
                            <div><Link to='/'>Home</Link></div>
                            <div><Link to='/profile'>Profile</Link></div>
                        </div> :
                        <div>
                            <div><Link to='/'>Home</Link></div>
                            <div><Link to='/register'>Register</Link></div>
                            <div><Link to='/login'>Login</Link></div>
                        </div>
                }
            </header>
            {/*We will render all our components here */}
            <>
                <Route path='/register'>{appState.loggedIn ? <Navigate to='/' /> : <Register />}</Route>
                <Route path='/login'>{appState.loggedIn ? <Navigate to='/' /> : <Login />}</Route>
                <Route path='/profile'>{appState.loggedIn ? <Profile /> : <Navigate to='/login' />}</Route>
                <Route element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/singlepage" element={<SingleCountryPage />} />
                <Route path="/tovisit" element={<Tovisit />} />
                <Route path="/visited" element={<Visited />} />
            </>

        </Routes>
    </BrowserRouter>
}
