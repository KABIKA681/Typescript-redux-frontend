// // import { CountryReducerState } from './CountryTypes'
// import { BuzReducerState } from './FeedbackTypes'
// import { RemoveReducerState } from './RemoveCountry'
// import initiaState from './initial-states'

// export * from './CountryTypes'
// export * from './FeedbackTypes'
// export * from './RemoveCountry'

// //global App State

// export type AppState = {
//     initialState:initiaState,
//     // countryReducer: CountryReducerState
//     // feedbackReducer: BuzReducerState
//     // removeCountryReducer:RemoveReducerState
// }

declare global {
    namespace NodeJS {
        interface Global {
            HermesInternal: string
        }
    }
}

export { default as IState } from './initial-states/IState'
export { default as InitialState } from './initial-states'