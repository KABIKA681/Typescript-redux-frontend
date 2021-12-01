/* eslint-disable jsx-a11y/role-supports-aria-props */

import React, { useState } from "react";
import RoutesPage from "../Routes";
export default function Topbar() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
 

    return (
        <>
            <div className="ml-60 " >
                <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white  relative z-10" >
                    <div className="hidden lg:flex w-full pr-6">
                        <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                        
                        <RoutesPage/>

                        </div>
                        <div className="w-1/2 hidden lg:flex mt-10">

                            <div className="w-full flex items-center pl-8 justify-end">
                                <p className="text-gray-600">LIGHT MODE</p>
                                <div className="h-full w-20 flex items-center justify-center">
                                    <div className="relative cursor-pointer text-gray-600" bg-red-400>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>

                                </div>
                                <div className="h-full w-20 flex items-center justify-center">
                                    <div className="relative cursor-pointer text-gray-600" bg-gray-600>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                        </svg>
                                        <div className="w-2 h-2 rounded-full bg-red-400 absolute inset-0 mt-1 mr-1 m-auto" />
                                    </div>
                                </div>
                                <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                    </svg>
                                </div>
                                <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                    <p className="text-gray-800 text-sm mx-3">J. Harden</p>
                                    <div className="rounded-full">
                                        {profile ? (
                                            <ul className="p-2 w-full border-r bg-white absolute rounded left-0  mt-12 sm:mt-16 ">
                                                <li className="flex w-full justify-between text-gray-600 hover:text-red-400 cursor-pointer items-center">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <circle cx={12} cy={7} r={4} />
                                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                        </svg>
                                                        <span className="text-sm ml-2">My Profile</span>
                                                    </div>
                                                </li>
                                                <li className="flex w-full justify-between text-gray-600 hover:text-red-400 cursor-pointer items-center mt-2">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                        </svg>
                                                        <span className="text-sm ml-2">Sign out</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        ) : (
                                            ""
                                        )}
                                        <div className="relative">
                                            <img className="rounded-full h-10 w-10 object-cover" src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" />
                                            <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                        </div>
                                    </div>
                                    <div className="cursor-pointer text-gray-600">
                                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                        {show ? (
                            " "
                        ) : (
                            <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={4} y1={8} x2={20} y2={8} />
                                <line x1={4} y1={16} x2={20} y2={16} />
                            </svg>
                        )}
                    </div>
                </nav>
                <div className=" bg-white">
                    <div className="w-full h-full bg-white flex ">
                        <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                            <div className="relative w-1/2 mt-2 p-5">
                                <div className="text-gray-500 absolute ml-10 inset-0 m-auto w-4 h-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <input className="border border-gray-100 focus:outline-none focus:border-red-400 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search for a country" />
                            </div>  
                        </div>
                        <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24 ">
                            <div className="relative ml-40 p-5" >
                                <div className="text-gray-500 absolute ml-10 inset-0 m-auto w-4 h-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <input className="border border-gray-100 focus:outline-none focus:border-red-400 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Filter by region" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                

            </div>

        </>
    );
}
