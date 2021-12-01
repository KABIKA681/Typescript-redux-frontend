import {Dispatch} from 'redux'
import axios from 'axios'

import { FETCH_COUNTRIES, FETCH_COUNTRIES_SUCCESS, CountryActions, FETCH_COUNTRIES_FAILURE } from "../../types"

//fetch all countries

export function fetchAllCountries():CountryActions {
    
    return {
        type:FETCH_COUNTRIES
    } 
}

// fetch all countries success
export function fetchAllCountriesSuccess(countries:[]):CountryActions {
    
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}

// fetch all countries failure
export function fetchAllCountriesFailure(error:string):CountryActions {
    
    return {
        type: FETCH_COUNTRIES_FAILURE,
        payload: error
    }
}

//FETCH COUNTRIES DATA 
export function fetch