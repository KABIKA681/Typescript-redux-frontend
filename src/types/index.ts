import { CountryReducerState } from './CountryTypes'
import { BuzReducerState } from './FeedbackTypes'

export * from './CountryTypes'
export * from './FeedbackTypes'

//global App State

export type AppState = {
    countryReducer: CountryReducerState
    feedbackReducer: BuzReducerState
}