/* eslint-disable no-restricted-globals */
import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_LOADING, REMOVE_COUNTRY_FROM_THE_LIST} from '../../constants/action-types/countries/fetchCountries'

//fetch all countries
export function fetchAllCountriesLoading(){

    return {
        type:FETCH_COUNTRIES_LOADING
    }

}

// fetch all countries success
export function fetchAllCountriesSuccess(countries:[]){
    return {
        type:FETCH_COUNTRIES_SUCCESS,
        payload:countries
    }

}
// remove country
export function removeCountry(name:string){
    return {
        type:REMOVE_COUNTRY_FROM_THE_LIST,
        payload:name
    }

}

// fetch all countries failure
export function fetchAllCountriesFailure(error:string){
    return {
        type:FETCH_COUNTRIES_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllCountries(){

    return (dispatch:Dispatch)=>{

        dispatch(fetchAllCountriesLoading())
        //axios call 
        axios.get('https://restcountries.com/v2/all')
        .then((res)=>{
            const countries=res.data 
            dispatch(fetchAllCountriesSuccess(countries))
        }).catch((err)=>{
            dispatch(fetchAllCountriesFailure(err))

        })
    }

}

export function removeCountryAction(name: string) {
    return (dispatch: Dispatch) => {
        dispatch(removeCountry(name))
    }
}