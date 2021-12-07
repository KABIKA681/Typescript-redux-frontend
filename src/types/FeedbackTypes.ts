//reducer case constants
export const ADD_COUNTRY_TO_BUZ = 'ADD_COUNTRY_TO_BUZ'
export const REMOVE_COUNTRY_FROM_BUZ='REMOVE_COUNTRY_FROM_BUZ'

export type BuzCountry={}
export type BuzReducerState = {
    buz:BuzCountry[]
}
// action types
export type AddCountryToBuz = {
    type: typeof ADD_COUNTRY_TO_BUZ
    payload: BuzCountry
}
export type RemoveCountryFromBuz= {
    type: typeof REMOVE_COUNTRY_FROM_BUZ
    payload: BuzCountry
}

export type FeedbackActions = AddCountryToBuz | RemoveCountryFromBuz 