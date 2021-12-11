/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */

import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function CountryDetailTopBar() {
    const [show, setShow] = useState(false);


    //Cart open menu related state
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);

    const handleBuzClose = () => {
        setAnchorEl(null);
    };



    return (
        <>
            {/*Mobile responsive sidebar*/}
            <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                <div className="bg-none absolute h-120 w-full lg:hidden" onClick={() => setShow(!show)} />
                <div className="absolute z-40 sm:relative w-full md:w-96 shadow pb-4 bg-white lg:hidden transition duration-150 ease-in-out h-120">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div>
                            <div className="flex items-center justify-between px-8">
                                <div className="h-16 w-full flex items-center">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                        width="60.000000pt" height="688.000000pt" viewBox="0 0 2408.000000 988.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,988.000000) scale(0.100000,-0.100000)"
                                            fill="#000000" stroke="none">
                                            <path d="M19960 9314 c-19 -2 -91 -9 -160 -14 -1079 -93 -2081 -541 -2790
            -1250 -308 -308 -540 -629 -741 -1025 -237 -469 -380 -963 -445 -1540 -34
            -308 -29 -831 12 -1155 255 -2023 1717 -3442 3819 -3710 273 -35 468 -43 865
            -37 580 9 1029 60 1551 177 340 76 747 199 884 268 326 163 557 489 605 854 8
                57 10 515 8 1473 l-3 1390 -27 95 c-125 442 -427 730 -878 836 -69 16 -172 18
                -1297 21 l-1223 4 0 -268 c0 -148 5 -307 11 -353 59 -479 375 -842 847 -972
                70 -20 108 -22 405 -26 l327 -3 -2 -761 -3 -761 -105 -39 c-291 -110 -620
                -165 -1032 -175 -380 -9 -644 20 -938 101 -781 215 -1342 771 -1584 1568 -155
                512 -172 1149 -45 1666 62 251 181 537 314 752 359 579 939 971 1605 1084 170
                29 328 39 530 33 373 -11 704 -84 1014 -224 171 -77 228 -99 311 -121 368 -98
                768 -1 1034 252 35 34 203 220 374 415 l311 353 -50 44 c-168 151 -384 306
                -578 418 -596 344 -1374 568 -2171 626 -126 9 -669 12 -755 4z"/>
                                            <path d="M1446 9084 c-489 -90 -856 -470 -926 -960 -8 -57 -10 -940 -8 -3234
            l3 -3155 28 -100 c37 -136 130 -320 213 -423 172 -215 405 -353 685 -407 71
            -13 247 -15 1358 -15 767 0 1332 4 1416 10 943 69 1669 341 2144 804 185 181
            294 328 402 545 140 280 214 598 226 966 8 283 -21 504 -98 739 -212 646 -764
            1114 -1496 1268 -59 12 -103 26 -103 33 0 6 39 26 88 44 815 307 1272 942
            1272 1769 0 416 -106 802 -304 1107 -321 493 -915 826 -1711 960 -359 60 -322
            59 -1775 61 -1131 2 -1347 0 -1414 -12z m2443 -1608 c400 -67 636 -205 750
            -438 51 -104 71 -205 71 -350 -1 -406 -207 -683 -609 -818 -49 -17 -140 -40
            -203 -51 -107 -21 -150 -22 -780 -26 l-668 -4 0 856 0 856 668 -4 c575 -3 681
            -6 771 -21z m116 -3189 c555 -79 843 -271 947 -633 20 -69 23 -102 23 -254 0
            -205 -13 -273 -79 -415 -152 -323 -499 -510 -1045 -565 -59 -6 -381 -10 -752
            -10 l-649 0 0 951 0 950 723 -4 c585 -3 743 -7 832 -20z"/>
                                            <path d="M11075 9084 c-243 -44 -479 -172 -635 -342 -74 -80 -160 -206 -195
            -286 -14 -31 -458 -1178 -986 -2549 -529 -1371 -1186 -3075 -1461 -3787 -275
            -712 -502 -1303 -505 -1312 -5 -17 35 -18 750 -18 640 0 767 2 836 15 365 70
            656 288 813 610 35 72 135 368 363 1070 1490 4596 1357 4195 1386 4195 27 0
            -30 171 1390 -4180 176 -542 338 -1022 359 -1067 74 -159 200 -313 345 -422
            94 -71 268 -155 390 -188 l100 -28 808 -3 c444 -1 807 0 807 3 0 3 -239 636
            -531 1408 -292 771 -938 2478 -1435 3792 -498 1315 -924 2431 -948 2480 -138
            288 -405 503 -736 593 -93 25 -103 26 -465 28 -292 2 -387 0 -450 -12z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div id="closeSideBar" className="flex items-center justify-center h-10 w-10 cursor-pointer" onClick={() => setShow(!show)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex justify-center mb-4 w-full px-6">
                                    <div className="relative w-full">
                                        <div className="text-gray-600 absolute ml-4 inset-0 m-auto w-4 h-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={10} cy={10} r={7} />
                                                <line x1={21} y1={21} x2={15} y2={15} />
                                            </svg>
                                        </div>
                                        <input className="bg-white focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="border-t border-gray-300">
                                    <div className="w-full flex items-center justify-between px-6 pt-1">
                                        <div className="flex items-center">
                                            <img alt="profile-pic" src="https://images.pexels.com/photos/3746155/pexels-photo-3746155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="w-8 h-8 rounded-full object-cover" />
                                            <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">Ben Morisho </p>
                                        </div>
                                        <ul className="flex">
                                            <li className="cursor-pointer text-white pt-5 pb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                </svg>
                                            </li>
                                            <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bg-gray-200 rounded-full icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul aria-orientation="vertical" className=" py-6">
                                <li className="pl-6 cursor-pointer text-red-600 text-sm leading-3 tracking-normal pb-4 pt-5 focus:text-red-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                            </svg>
                                        </div>
                                        <span className="ml-2 xl:text-base md:text-2xl text-base">MY LIST</span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-red-600 focus:text-red-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                            </svg>
                                        </div>
                                        <span className="ml-2 xl:text-base md:text-2xl text-base">VISITED</span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-red-600 focus:text-red-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <span className="ml-2 xl:text-base md:text-2xl text-base">TO VISIT</span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*Mobile responsive sidebar*/}
            <div className="w-full">
                {/* Navigation starts */}
                <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white  shadow-xl relative z-10">
                    <div className="hidden lg:flex w-full pr-6">
                        <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                            <div className="relative w-full">
                                <div className="font-bold">
                                    <Link to="/home">
                                        <div className="px-6 flex flex-wrap">
                                            <a href="javascript: void(0)" className="mx-2 my-2 flex items-center bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-200 text-black pl-3 pr-6 py-2 text-sm">
                                                <span className="h-4 w-4 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="black" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                    </svg>
                                                </span>
                                                Back
                                            </a>
                                            {/* Code block for button with icon ends */}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 hidden lg:flex">
                            <div className="w-full flex items-center pl-8 justify-end ">
                                <p className="text-sm  -mr-6">Theme mode</p>
                                <div className="h-full w-20 flex items-center justify-center ">

                                    <div className="relative cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </div>
                                {/*ADD COUNTRY TO BUZZ*/}
                                <div className="h-full w-20 flex items-center justify-center cursor-pointer ">
                                    <div className="relative cursor-pointer text-gray-600 mt-2.5 mr-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell " width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                        </svg>
                                        <p className="w-5 h-5  border-white absolute inset-0 -mt-1 -mr-1.5 m-auto text-white bg-red-500 pb-4 pr-4 pl-0.5 pt-0 rounded-full text-sm align-center justify-center">
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center relative cursor-pointer">
                                    <p className="text-gray-800 text-sm mx-3">Ben Morisho</p>
                                    <div className="rounded-full">
                                        <div className="relative">
                                            <img className="rounded-full h-10 w-10 object-cover" src="https://images.pexels.com/photos/3746155/pexels-photo-3746155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" />

                                            <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                        {show ? (
                            " "
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </div>
                </nav>

            </div>


        </>
    );
}
