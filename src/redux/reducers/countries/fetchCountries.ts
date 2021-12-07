import { FETCH_COUNTRIES_LOADING, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS, REMOVE_COUNTRY_FROM_THE_LIST } from '../../../constants/action-types/countries/fetchCountries';
import { ADD_COUNTRY_TO_BUZ, REMOVE_COUNTRY_FROM_BUZ } from "../../../constants/action-types/countries/visitedCountry"

import ICountries from '../../../types/initial-states/ICountries'


export default function countryReducer(state: ICountries, { type, payload }: any) {
  
    switch(type){

        // fetch country, loading true
        case FETCH_COUNTRIES_LOADING:
            return {
                ...state, 
                countryList: {
                    ...state.countryList,
                    loading:true,   
                }
               
            }
        //if fetching is successful 
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countryList: {
                ...state.countryList,
                data:payload,
                loading:false, 
                error: null, 
                }
                
            }
        case REMOVE_COUNTRY_FROM_THE_LIST:
            return {
                ...state,
                countryList: {
                ...state.countryList,
                data: state.countryList.data?.filter((country: any) => country.name !== payload),
                loading:false, 
                error: null, 
                }
                
            }
            case ADD_COUNTRY_TO_BUZ:
                return {
                    ...state,
                    visitedCountry: {
                    ...state.visitedCountry,
                    data: [...state.visitedCountry.data, payload],
                    loading:false, 
                    error: null, 
                    }
                    
                }
            
        //if fetching has any errors
        case FETCH_COUNTRIES_FAILURE:
            return {
                ...state,
                loading:false, 
                error:payload
            }

        default:
            return state

    }



}