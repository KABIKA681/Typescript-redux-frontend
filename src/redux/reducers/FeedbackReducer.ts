

//Initial state

const initState = {
    buz: [],

}

//cart reducer function

export default function feedbackReducer(state = initState, action: any) {
    
    switch (action.type) {
        
        //adding country to buz
        case 'ADD_COUNTRY_TO_BUZ': {
            const country = action.payload

            return {
                ...state,
                buz:[...state.buz, country]

            }
        }
        case 'REMOVE_COUNTRY_FROM_BUZ': {
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
