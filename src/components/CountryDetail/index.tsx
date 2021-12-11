import React from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../sidebar'
import CountryDetailTopBar from './countryDetailTopbar'
import TableDetail from './TableDetail'


const CoutryDetail = () => {
    const location = useLocation()
    const country = location.state
    console.log(country)
    return (
        <>
            <div className="w-full h-screen bg-white">
                <div className="flex flex-no-wrap h-full">
                    <Sidebar />
                    <div className="w-full">
                        <CountryDetailTopBar />
                        <div className="flex flex-wrap m-10 ml-14 justify-between">
                        </div>

                        <div className=" mx-20 py-10 h-64  w-full  flex ">

                            <div className='flex '>
                                <div className='w-80 mr-20 '>
                                    <img src={country.flag} alt="" className='border' />
                                </div>
                                <div className='' style={{ width: "600px" }}>
                                    <h1 className='text-bold text-xl'>
                                        {country.name}
                                    </h1>
                                    <div className='flex flex-row mt-8' style={{ width: "600px" }}>
                                        <TableDetail />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CoutryDetail