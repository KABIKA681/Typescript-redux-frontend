import React, { useContext } from "react";
import { Routes, Route, Link, Navigate, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home/Home";
import SingleCountryPage from "./pages/SingleCountryPage/SingleCountry";
import Tovisit from "./pages/ToVisit/Tovisit";
import Visited from "./pages/Visited/Visited";
import Login from './components/auth/Login'
import Register from './components/auth/Signup';



export const Routespage = () => (
    <Routes>

        <>

            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/singlepage" element={<SingleCountryPage />} />

            <Route path="/tovisit" element={<Tovisit />} />
            <Route path="/visited" element={<Visited />} />
        </>

    </Routes>
)
