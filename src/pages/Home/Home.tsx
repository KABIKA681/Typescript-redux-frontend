/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { fetchAllCountries, addCountryToBuz } from "../../redux/actions";
import { InitialState, IState } from "../../types";
import CountryCard from "../../components/CountryCard";
import FilterRegion from "../../components/FilterRegion";
import Loader from "../../components/Loader";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Routespage } from "../../Routes";


const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;


export default function Home() {

    const { countries: { countryList } } = typedUseSelectorHook(({ countries }) => ({ countries }))

    // for filtered countries 
    const [filteredCountries, setFilteredCountries] = React.useState(countryList)

    //const search keyword
    const [searchKeyword, setSearchKeyword] = React.useState('')

    React.useEffect(() => {
        setFilteredCountries(countryList)
    }, [countryList])

    //filter country by keyword
    // React.useEffect(() => {
    //     const _tempCountries= countryList.filter((country:any) => country.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    //     setFilteredCountries(_tempCountries)
    // }, [countryList, searchKeyword])

    const handleSearchKeyword = (value: string) => {
        setSearchKeyword(value)
    }

    const dispatch = useDispatch()
    //dispatch fetcchallcountries when page load
    React.useEffect(() => {
        dispatch(fetchAllCountries())
    }, [])




    return (
        <>
            {/* <Routespage/> */}
            <div className="w-full h-screen bg-white">
                <div className="flex flex-no-wrap h-full">
                    <Sidebar />
                    <div className="w-full">
                        <Topbar />
                        <div className="flex flex-wrap m-10 ml-14 justify-between">
                            <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                <div className="relative w-full">
                                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={10} cy={10} r={7} />
                                            <line x1={21} y1={21} x2={15} y2={15} />
                                        </svg>
                                    </div>
                                    <input className=" border-gray-400 w-80 focus:outline-none rounded  text-sm text-gray-500 bg-white pl-10 py-1.5" type="text" placeholder="Search For a Country..." />
                                </div>
                            </div>
                            <div className="w-1/2 h-full hidden lg:flex items-center -mt-8">

                                <FilterRegion />

                            </div>
                        </div>

                        <div className=" mx-20 py-10 h-64  w-full  flex flex-wrap">

                            {countryList.loading && <div><Loader /></div>}
                            {filteredCountries.data?.map((country: any) => (
                                <CountryCard {...country} onClick={() => dispatch(addCountryToBuz(country))} searchKeyword={searchKeyword} />
                            ))}

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

function countries(countries: any): [any, any] {
    throw new Error("Function not implemented.");
}
