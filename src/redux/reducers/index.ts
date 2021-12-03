import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'
import feedbackReducer from './FeedbackReducer'


const rootReducer = () => 
    combineReducers({
        countryReducer,
        feedbackReducer
    })


export default rootReducer