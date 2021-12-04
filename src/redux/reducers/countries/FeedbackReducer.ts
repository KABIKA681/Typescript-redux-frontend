import { ADD_COUNTRY_TO_BUZ, REMOVE_COUNTRY_FROM_BUZ } from "../../../constants/action-types/countries/visitedCountry"
import ICountries from '../../../types/initial-states/ICountries'

//Initial state


//cart reducer function

export default function feedbackReducer(state:ICountries, { type, payload }: any) {
    

    
    switch (type) {
        
        //adding country to buz
        case ADD_COUNTRY_TO_BUZ: {
            const country = payload

            return {
                ...state,
                buz:[...state.visitedCountry.data, country]

            }
        }
        case REMOVE_COUNTRY_FROM_BUZ: {
            const newCountry = payload
            const tempBuz= state.visitedCountry.data.filter(country=>country!==newCountry)
            return {
                ...state, 
                buz:[...tempBuz]
            } 

        }
        default:
            return state


    }

}

