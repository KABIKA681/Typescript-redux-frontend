import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'

const rootReducer = () => {
    combineReducers({
        countryReducer
    })
}

export default rootReducer