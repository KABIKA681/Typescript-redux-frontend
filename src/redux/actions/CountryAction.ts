import { FETCH_COUNTRIES, FETCH_COUNTRIES_SUCCESS, CountryActions, FETCH_COUNTRIES_FAILURE, FetchAllCountriesAction} from "../../types"

//fetch all countries

export function fetchAllCountries():FetchAllCountriesAction {
    
    return {
        type:FETCH_COUNTRIES
    } 
}

// fetch all countries success
export function FetchAllCountriesSuccess(countries:[]):CountryActions {
    
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}

// fetch all countries success
export function FetchAllCountriesFailure(error:string):CountryActions {
    
    return {
        type: FETCH_COUNTRIES_FAILURE,
        payload: error
    }
}