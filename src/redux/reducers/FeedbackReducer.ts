import { ADD_COUNTRY_TO_BUZ, REMOVE_COUNTRY_FROM_BUZ, FeedbackActions, BuzReducerState } from "../../types"

//Initial state

const initState:BuzReducerState = {
    buz: [],

}

//cart reducer function

export default function feedbackReducer(state:BuzReducerState = initState, action:FeedbackActions):BuzReducerState {
    
    switch (action.type) {
        
        //adding country to buz
        case ADD_COUNTRY_TO_BUZ: {
            const country = action.payload

            return {
                ...state,
                buz:[...state.buz, country]

            }
        }
        case REMOVE_COUNTRY_FROM_BUZ: {
            const newCountry = action.payload
            const tempBuz= state.buz.filter(country=>country!==newCountry)
            return {
                ...state, 
                buz:[...tempBuz]
            } 

        }
        default:
            return state


    }

}
