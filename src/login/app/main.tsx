import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AppStateContext } from './provider';
import { Home } from './home';
import { Login } from './login';
import { Register } from './register';
import { Profile } from './profile';
import { NotFound } from './not_Found';


export const Main: React.FC = () => {
    const { appState } = useContext(AppStateContext);

    return <BrowserRouter>
        <div>
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
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register'>{appState.loggedIn ? <Navigate to='/' /> : <Register />}</Route>
                <Route path='/login'>{appState.loggedIn ? <Navigate to='/' /> : <Login />}</Route>
                <Route path='/profile'>{appState.loggedIn ? <Profile /> : <Navigate to='/login' />}</Route>
                <Route element={<NotFound />} />
            </Routes>
        </div>
    </BrowserRouter >;
}