
import {ADD_COUNTRY_TO_BUZ, REMOVE_COUNTRY_FROM_BUZ} from '../../constants/action-types/countries/visitedCountry'

//Add country to BUzzz
export function addCountryToBuz(country: {}){
    
  

    return {
        type: ADD_COUNTRY_TO_BUZ,
        payload:country
    }

}

//Remove country from the card

export function removeCountryToBuz(country:{}){

    return {
        type: REMOVE_COUNTRY_FROM_BUZ,
        payload:country
    }

}
