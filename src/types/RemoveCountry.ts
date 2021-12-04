

export const REMOVE_COUNTRY_FROM_THE_LIST= 'REMOVE_COUNTRY_FROM_THE_LIST'

export type Country = {}

export type RemoveReducerState = {
    country: Country[],
    
}

// action types
export type RemoveCountryFromTheList = {
    type: typeof REMOVE_COUNTRY_FROM_THE_LIST
    payload: Country
}


export type RemoveCountryAction = RemoveCountryFromTheList
