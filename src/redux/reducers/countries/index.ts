/* eslint-disable import/no-anonymous-default-export */
import countryInitialState from '../../initial-states/countries';
import fetchCountries from './fetchCountries';
// import removeCountry from './RemoveCountry';
import ICountries from '../../../types/initial-states/ICountries'
import feedbackReducer from './FeedbackReducer';


export default (initialState : ICountries, action: any) => {

    const state = initialState || countryInitialState

    return {
        ...state,
        ...fetchCountries(state, action),
        
    }

}